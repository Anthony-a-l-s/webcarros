import { useState, useEffect, useContext } from "react";
import { Container } from "../../components/container"
import { DashboarHeader } from "../../components/panelHeader"
import { FiTrash2 } from "react-icons/fi"
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../services/firebaseConection";
import { AuthContext } from "../../contexts/AuthContex";

interface CarsProps {
    id: string;
    name: string;
    year: string;
    uid: string;
    city: string;
    price: string | number;
    km: string;
    images: CarImageProps[];
}

interface CarImageProps {
    name: string;
    uid: string;
    url: string;
}

export function Dashboard() {

    const { user } = useContext(AuthContext);
    const [cars, setCars] = useState<CarsProps[]>([]);

    useEffect(() => {
        function loadCars() {
            if (!user?.uid) {
                return;
            }
            const carsRef = collection(db, "cars")
            const qurryRef = query(carsRef, where("uid", "==", user?.uid))
            getDocs(qurryRef)
                .then((snapshot) => {
                    let listCars = [] as CarsProps[];
                    snapshot.forEach(doc => {
                        listCars.push({
                            id: doc.id,
                            name: doc.data().name,
                            year: doc.data().year,
                            uid: doc.data().uid,
                            city: doc.data().city,
                            price: doc.data().price,
                            km: doc.data().km,
                            images: doc.data().images
                        })
                    })
                    setCars(listCars);
                    console.log(cars)
                }).catch((error)=>{
                    console.log('erro: ' + error)
                })


        }

        loadCars();

    }, [user])

    return (
        <Container>
            <DashboarHeader />

            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map(car => (
                    <section key={car.id} className="w-full bg-white rounded-lg relative">
                        <button className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow"
                            onClick={() => { }}
                        >
                            <FiTrash2 size={26} color="#000" />
                        </button>
                        <img
                            className="w-full rounded-lg mb-2 max-h-70"
                            src={car.images[0].url}
                        />
                        <p className="font-bold mt-1 px-2 mb-2">{car.name}</p>
                        <div className="flex flex-col px-2">
                            <span className="text-zinc-700">Ano:{car.year} | {car.km} km </span>
                            <strong className="text-black font-bold mt-4">R$ {car.price}</strong>
                        </div>
                        <div className="w-full h-px bg-slate-300 my-2"></div>
                        <div className="px-2 pb-2">
                            <span className="text-black">
                                {car.city}
                            </span>
                        </div>
                    </section>
                ))}
            </main>

        </Container>
    )
}


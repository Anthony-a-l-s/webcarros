import { Container } from "../../components/container";


export function Home() {


    return (
        <Container>
            <section className="bg-white p-4 rounded-lg max-w-3xl mx-auto flex justify-center items-center">
                <input className="w-full border-2 rounded-lg h-9 px-3 outline-none mx-4"
                placeholder='Digite o nome do carro...'
                />
                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
                    Buscar
                </button>
            </section>
            <h1 className="font-bold text-center mt-6 text-xl mb-4">
                Carros novos e usados em todo Brasil
            </h1>
            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <section className="w-full bg-white rounded-lg">
                    <img 
                        className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
                        src='https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202406/20240617/chevrolet-cruze-1.4-turbo-ltz-16v-flex-4p-automatico-wmimagem12260753319.jpg?s=fill&w=552&h=414&q=60'
                        alt='Carro'
                    />
                    <p className="font-bold mt-1 mb-2 px-2">CHEVROLET CRUZE</p>
                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">Ano: 2016/2016 | 45.000 km </span>
                        <strong className="text-black font-medium text-xl">R$ 67.000,00</strong>
                    </div>
                    <div className="w-full h-px bg-slate-300 my-2"></div>
                    <div className="px-2 pb-2">
                        <span className="text-black">
                            Juiz deFora - MG
                        </span>
                    </div>
                </section>
            </main>
        </Container>
    )
}


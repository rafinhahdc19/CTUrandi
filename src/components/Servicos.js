import Image from 'next/image'

export default function Servicos(){
    return(
        <div className="bg-white flex flex-col ">
            
            <div>
                <p className="text-red-600 text-xl md:text-lg font-sans font-medium text-center mt-3">Serviços</p>
            </div>
            <div className="ml-auto mr-auto flex-col items-center md:flex-row md:flex justify-center w-4/5">
                <div className="items-center flex justify-center">
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-xs rounded-2xl" width={473} height={473} src="/Servicosimage.jpg" alt="serviços image"/>
                </div>
                <div className="mx-3">
                    <h3 className="sm:text-3xl text-2xl font-sans font-semibold">Faça tudo com segurança</h3>
                    <p className="sm:text-xl text-base mb-4 md:mb-0 font-sans font-normal">Nossos serviços abrangem treinamento especializado em tiro esportivo, além de eventos e competições emocionantes. Conte com nossa equipe de profissionais para uma experiência segura e enriquecedora. Explore o universo do tiro esportivo conosco e alcance novos patamares em sua habilidade e técnica de tiro.</p>
                </div>
            </div>
        </div>
    )
}

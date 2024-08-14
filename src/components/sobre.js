import ScrollRevealContainer from '@/components/ScrollRevealContainer';
import Image from 'next/image'
export default function Sobre(){
    return(
        <div className="bg-white flex flex-col pb-3">
            <ScrollRevealContainer>
            <div>
                <p className="text-red-600 text-xl md:text-lg font-sans font-medium text-center mt-3">Sobre</p>
            </div>
            <div className="ml-auto mr-auto flex-col md:flex-row md:flex justify-center w-4/5 lg:w-2/4">
                <div className="flex ml-auto mr-auto max-w-img2 md:block justify-center">
                    <Image className="h- w-auto md:w-2/4 mx-3 mb-4 flex justify-center  md:max-w-img rounded-full" width={100} height={100} src="/grupoinstrutores.jpg" alt="serviços image"/>
                </div>
                <div className="mx-3">
                    <h3 className="sm:text-3xl text-2xl font-sans font-semibold">Dispare sua precisão conosco</h3>
                    <p className="sm:text-xl text-base mb-4 md:mb-0 font-sans font-normal">Somos uma equipe especializada em tiro esportivo, dedicados em proporcionar uma experiência única e segura para todos os entusiastas. Oferecemos a oportunidade de praticar conosco, buscando sempre o melhor para você. Seja você um iniciante ou um atirador experiente, estamos prontos para ajudá-lo a aprimorar suas habilidades e desfrutar dessa emocionante modalidade esportiva.</p>
                </div>
            </div>
            </ScrollRevealContainer>
        </div>
    )
}

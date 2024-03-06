import ScrollRevealContainer from '@/components/ScrollRevealContainer';
export default function Contato(){
    return(
        <div className="bg-white p-0 ">
            <ScrollRevealContainer>
        <div>
                <p className="text-red-600 text-xl md:text-lg font-sans font-medium text-center mb-4">Contato</p>
        </div>
        <div className="bg-gray-100 items-center text-center flex flex-col justify-between md:p-[62px] p-[48px]">
            <h3 className="sm:text-3xl text-2xl font-sans font-semibold my-4">Converse com nossa equipe</h3>
            <a href="https://wa.me/5577991964479?text=ol%C3%A1"><button className="my-4 sm:text-base text-sm text-white p-3 rounded mt-3 px-5 font-sans font-light bg-sky-600">ENTRE EM CONTATO PELO WHATSAPP</button></a>
            <span className="my-4 text-xl">Instagram: <a className="text-xl no-underline" href="https://www.instagram.com/clubedetirourandi.ctu/">clubedetirourandi.ctu</a></span>
        </div>
        </ScrollRevealContainer>
        </div>
    )
}
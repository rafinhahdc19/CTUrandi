import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ScrollRevealContainer from '@/components/ScrollRevealContainer';
import Image from 'next/image'

export default function Eventos(){
    return (
        <div className="bg-white p-2 pb-3 ">
            <ScrollRevealContainer>
            <div>
                <p className="text-red-600 text-xl md:text-lg font-sans font-medium text-center mt-0">Eventos</p>
            </div>
            <div className='bg-gray-100 w-full rounded-2xl'>
                <div className='w-full rounded-2xl sm:w-4/5 justify-center items-center ml-auto mr-auto'>
                <Splide  aria-label="My Favorite Images">
                <SplideSlide className='justify-center items-center ml-auto mr-auto flex'>
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-lg rounded-2xl" width={700} height={700} src="/evento1.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide className='justify-center items-center ml-auto mr-auto flex'>
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-lg rounded-2xl" width={700} height={700} src="/imagemevento1.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className='justify-center items-center ml-auto mr-auto flex'>
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-lg rounded-2xl" width={700} height={700} src="/imagemevento2.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className='justify-center items-center ml-auto mr-auto flex'>
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-lg rounded-2xl" width={700} height={700} src="/imagemevento3.png" alt="Image 2"/>
                </SplideSlide>
                <SplideSlide className='justify-center items-center ml-auto mr-auto flex'>
                    <Image className="mx-3 mb-4 flex items-center justify-center w-auto sm:max-w-lg rounded-2xl" width={700} height={700} src="/imagemevento4.png" alt="Image 2"/>
                </SplideSlide>
                </Splide>
                </div>
            </div>
            </ScrollRevealContainer>
        </div>
    )
}

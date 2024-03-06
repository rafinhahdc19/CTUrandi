import ScrollRevealContainer from '@/components/ScrollRevealContainer';

export default function Footer(){
    return(
        <div className="bg-white b-0">
            <ScrollRevealContainer>
                <div className='px-16 py-10'>
                    <h5 className='font-sans'>Telefone</h5>
                    <p className='font-sans'>+55 77 99196-4479</p>
                </div>
                <div className='p-2 text-center'>
                    <h5>2023 © clubedetirourandi</h5>
                </div>
            </ScrollRevealContainer>
        </div>
    )
}
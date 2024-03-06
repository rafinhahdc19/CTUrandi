import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

export default function Navbarctu() {
  const [navbarmobilevisibility, setnavbarmobilevisibility] = useState("hidden");
  const [Number, SetNumber] = useState("2 ease-in-out");
  const [zin, Setzin] = useState("0 ease-in-out bg-white");
  const [opentoclose, setOpentoclose] = useState(0);

  useEffect(() => {
    function handlescroll() {
      const currentPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (currentPosition > 10) {
        SetNumber("0 ease-in-out");
        Setzin("20 ease-in-out bg-white");
        setnavbarmobilevisibility("hidden");
      } else {
        SetNumber("2 ease-in-out");
        if (opentoclose === 1) {
          Setzin("20 ease-in-out bg-white");
        } else {
          Setzin("0 ease-in-out bg-white/0");
        }
      }
    }

    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [opentoclose]);

  const changeNumber = () => {
    if (navbarmobilevisibility === "hidden") {
      setnavbarmobilevisibility("visibility");
      setOpentoclose(1);
      Setzin("20 ease-in-out bg-white");
    } else {
      setnavbarmobilevisibility("hidden");
      setOpentoclose(0);
    }
  };

  const changeNumberitems = () => {
    setnavbarmobilevisibility("hidden");
  };

  return (
    <nav className={" z-" + zin + " duration-300 fixed w-full py-" + Number}>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center opacity-100'>
            <Link
              to='Home'
              smooth={true}
              duration={500}
              offset={-130}
              className='z-20 flex-shrink-0 cursor-pointer'
            >
              <Image
                src='/logo.png'
                alt='logo CTU'
                width={140}
                height={200}
                className='h-20'
              ></Image>
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  to='Servicos'
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className='text-black z-20 text-sans decoration-transparent hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-base focus:font-medium font-light'
                  href='#'
                >
                  Serviços
                </Link>
                <Link
                  to='Eventos'
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className='text-black z-20 text-sans decoration-transparent hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-base focus:font-medium font-light'
                  href='#'
                >
                  Eventos
                </Link>
                <Link
                  to='Sobre'
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className='text-black z-20 text-sans decoration-transparent hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-base focus:font-medium font-light'
                  href='#'
                >
                  Sobre
                </Link>
                <Link
                  to='Contato'
                  smooth={true}
                  duration={500}
                  offset={-110}
                  className='text-black z-20 text-sans decoration-transparent hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-base focus:font-medium font-light'
                  href='#'
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={changeNumber}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100  ease-in-out duration-300 focus:outline-none  '
              aria-label='Menu'
              aria-expanded='false'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          navbarmobilevisibility +
          " md:hidden transition ease-in-out duration-300 "
        }
      >
        <div className='px-4 pt-2 pd-3 pb-3 sm:px-3'>
          <Link
            to='Servicos'
            onClick={changeNumberitems}
            smooth={true}
            duration={500}
            offset={-110}
            className='text-black z-20 text-sans decoration-transparent block hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-sm font-medium'
            href='#'
          >
            Serviços
          </Link>
          <Link
            to='Eventos'
            onClick={changeNumberitems}
            smooth={true}
            duration={500}
            offset={-110}
            className='text-black z-20 text-sans decoration-transparent block hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-sm font-medium'
            href='#'
          >
            Eventos
          </Link>
          <Link
            to='Sobre'
            onClick={changeNumberitems}
            smooth={true}
            duration={500}
            offset={-110}
            className='text-black z-20 text-sans decoration-transparent block hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-sm font-medium'
            href='#'
          >
            Sobre
          </Link>
          <Link
            to='Contato'
            onClick={changeNumberitems}
            smooth={true}
            duration={500}
            offset={-110}
            className='text-black z-20 text-sans decoration-transparent block hover:bg-gray-100 px-3 font-sans hover:ease-in-out ease-in-out duration-300 py-2 rounded-md text-sm font-medium'
            href='#'
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

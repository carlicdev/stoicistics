import { useState } from 'react'
import Modal from './Modal';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative max-w-5xl mx-auto w-full bg-slate-800 px-20 py-10 mt-10 rounded-lg flex flex-col justify-center text-center'>
        <Modal isOpen={isOpen} handleModal={() => setIsOpen(!isOpen)} content={<RegistrationForm />} />
        <img src={'./stoicMan.png'} alt='stoic' className='absolute left-[-50px] top-[-50px] h-[300px]'/>
        <p className='text-2xl font-black'>No necesitas de esta aplicación para ser un estoico, pero todo estoico del siglo XXI puede beneficiarse de ella.</p>
        <div className='flex gap-4 justify-center mt-10'>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className='px-4 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-bold text-lg'>
                Registrarse
            </button>
            <button className='px-4 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-bold text-lg'>
                Conocer Más
            </button>
        </div>
    </div>
  )
}

export default Hero
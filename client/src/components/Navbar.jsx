import { useState } from 'react'
import Modal from './Modal';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='max-w-7xl mx-auto w-full bg-slate-800 px-2 py-4 rounded-lg'>
      <Modal isOpen={isOpen} handleModal={() => setIsOpen(!isOpen)} content={<LoginForm />} />
      <div className='flex items-center'>
        <p className='text-3xl lg:text-5xl font-black ml-0 mr-auto'>stoicistics</p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='mr-0 ml-auto px-7 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-bold text-lg'
        >
          LogIn
        </button>
      </div>
    </div>
  )
}

export default Navbar
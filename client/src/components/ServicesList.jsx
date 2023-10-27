import React from 'react'
import { BsFillJournalBookmarkFill, BsCardChecklist, BsBook, BsClipboardCheck, BsPersonSquare, BsUiRadios } from 'react-icons/bs';

const ServicesList = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
        <div className='w-1/3 p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center p-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsFillJournalBookmarkFill /></span>
                    <p className='text-lg lg:text-4xl font-black mt-5'>Diario</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='w-1/3  p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center p-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsCardChecklist /></span>
                    <p className='text-lg lg:text-4xl font-black mt-5'>Tareas</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='w-1/3  p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center p-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsUiRadios /></span>
                    <p className='text-lg lg:text-4xl font-black mt-5'>Hábitos</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='w-1/3  p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center px-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsPersonSquare /></span>
                    <p className='text-lg lg:text-3xl font-black mt-5'>Meditaciones</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='w-1/3  p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center px-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsBook /></span>
                    <p className='text-lg lg:text-4xl font-black mt-5'>Libros</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='w-1/3  p-2 lg:p-5'>
            <div className='w-full bg-slate-800 flex flex-col items-center justify-center px-5 lg:py-10 rounded-lg'>
                <div className='flex gap-4 items-center justify-center'>
                    <span className='text-7xl text-yellow-500'><BsClipboardCheck /></span>
                    <p className='text-lg lg:text-4xl font-black mt-5'>Mucho Más</p>
                </div>
                <p className='text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesList
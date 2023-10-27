import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-slate-800'>
        <div className='max-w-7xl mx-auto w-full'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <p>Una columna</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3'>
                <p>Una columna</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3'>
                <p>Una columna</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
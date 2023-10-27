import { useState, useRef} from 'react'

const RegistrationForm = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='w-[400px] w-full mx-auto bg-slate-800  rounded-lg'>
        <div className='w-full p-5 flex items-center justify-center bg-yellow-500 rounded-t-lg'>
            <h4 className='font-black text-3xl'>Registro</h4>
        </div>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-2 p-2 lg:p-5'
        >
            <label
            className='w-full flex flex-col gap-1'
            >
                <span className='text-lg font-bold'>Nombre</span>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    className='rounded-lg p-1 outline-none focus:outline-yellow-500 bg-gray-100 text-gray-900'
                />
            </label>
            <label
            className='w-full flex flex-col gap-1'
            >
                <span className='text-lg font-bold'>Email</span>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className='rounded-lg p-1 outline-none focus:outline-yellow-500 bg-gray-100 text-gray-900'
                />
            <label
            className='w-full flex flex-col gap-1'
            >
                <span className='text-lg font-bold'>Password</span>
                <input 
                    type='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                    className='rounded-lg p-1 outline-none focus:outline-yellow-500 bg-gray-100 text-gray-900'
                />
            </label>
            </label>
            <label
            className='w-full flex flex-col gap-1'
            >
                <span className='text-lg font-bold'>Confirma el Password</span>
                <input 
                    type='password'
                    name='confirmPassword'
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className='rounded-lg p-1 outline-none focus:outline-yellow-500 bg-gray-100 text-gray-900'
                />
            </label>
            <button className='mt-5 px-7 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-bold text-lg hover:bg-yellow-500 hover:text-slate-900'>
                Registrarse
            </button>
        </form>
    </div>
  )
}

export default RegistrationForm
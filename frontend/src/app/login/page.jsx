'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useAppContext from '@/context/appContext'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('please enter a valid email address')
        .required('email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 charecter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&]/, 'Password must contain at least one spacial letter')
        .required('password is required'),
})


const Login = () => {
    const {setLoggedIn, setCurrentUser} = useAppContext();
    const router = useRouter()
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            
            axios.post('http://localhost:5000/user/authenticate', values)
            .then((response) => {
              console.log(response.status)
              localStorage.setItem('user', JSON.stringify(response.data))
              setLoggedIn(true)
              resetForm()
              toast.success('Login successfully')
              router.push('/')
      
            }).catch((err) => {
              console.log(err)
              toast.error('Invalid Credentials')
            });
      
          },
        validationSchema: LoginSchema,
    })
    return (
        <>
            <div className='flex justify-center items-center bg-cyan-50  h-screen  '>
                <form onSubmit={loginForm.handleSubmit}>
                    <div className='min-h-[380px] bg-cyan-700 hover:bg-cyan-800 text-white  max-w-[270px] md:min-w-[370px] shadow-lg hover:shadow-2xl rounded-lg'>
                        <div className='flex justify-center'>
                            <img className='h-[50px] mt-3' src="Developer_Roadmap__1_-removebg-preview.png" alt="" />
                        </div>
                        <div className=''>
                            <div className='md:min-w-[290] text-center'>{loginForm.errors.email && loginForm.touched.email ? (
                                <div className="text-red-500">{loginForm.errors.email}</div>
                            ) : null}</div>
                            <div className='flex justify-center '>
                                <label htmlFor="email"></label>

                                <input className='mt-3 mb-3 border-b   text-center font-sans font-semibold pb-1 md:min-w-[290px] border-white  md:border-b-white bg-transparent ' type="email"
                                    name="email"
                                    id='email'
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.email}
                                    placeholder='E-mail Address' />
                            </div>
                            <div className='md:min-w-[290px] text-center'>
                                {loginForm.errors.password && loginForm.touched.password ? (
                                    <div className="text-red-500">{loginForm.errors.password}</div>
                                ) : null}
                            </div>
                            <div className='flex justify-center mt-3 '>
                                <label htmlFor="password"></label>

                                <input className=' mt-3 md:min-w-[290px] text-center font-sans font-semibold mb-3 border-b pb-1 border-b-white bg-transparent ' type="password"
                                    id="password"
                                    name="password"
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.password}
                                    placeholder='Password' />
                            </div>
                            <div className='flex justify-center mt-1'>
                                <button type='submit' className='bg-cyan-100 text-lg text-blue-600 hover:bg-cyan-300 px-[30px] mt-5 rounded-3xl py-1 font-semibold font-sans'>
                                    Sign in
                                </button>

                            </div>
                            <p className='mx-14 mt-2 text-[13px] text-cyan-50 font-[550]'>Can't remember your passwor? <a className='underline' href="">Recover</a></p>
                        </div>
                        <hr className='mt-5' />
                        <p className='mx-14 mt-3 text-[15px] text-cyan-300 font-[600]'>Don't have an account? <Link className='underline' href="/contactus">create it.</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
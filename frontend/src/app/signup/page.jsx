'use client'
import React from 'react'
// import classes from './Signup.module.css'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'charecters used')
        .max(15, 'charecter used')
        .required('Name is required'),
    email: Yup.string()
        .email('please enter a valid email address')
        .required('email is required'),

    password: Yup.string()
        .min(8, 'Password must be at least 8 charecter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one spacial letter')
        .required('password is required'),
})
const Signup = () => {
    const router = useRouter()
    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')
            axios.post('http://localhost:5000/user/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('SignUp user info add successfully')
                    router.push('/login')

                }).catch((err) => {
                    console.log(err);
                    toast.error('Error')

                });

        },
        validationSchema: SignupSchema,
    })
    return (
        <>
            <div  className="flex justify-center h-screen items-center -z-1 bg-[url('https://img.freepik.com/free-photo/flat-lay-clean-office-desk_23-2148219267.jpg?uid=R112137763&ga=GA1.1.1237683001.1684563999&semt=ais_hybrid')] bg-cover  object-cover text-white "
            
            >
                <form onSubmit={signupForm.handleSubmit}>
                    <div className=' bg-cyan-700 hover:bg-cyan-800 h-[500px] max-w-[270px] md:min-w-[370px] hover:shadow-2xl rounded-lg shadow-lg'>
                        <div className=' flex  justify-center' >
                            <img className='h-[50px] mt-5' src="Developer_Roadmap__1_-removebg-preview.png" alt="" />

                        </div>
                        <div className='mt-[20px] flex flex-col justify-center items-center  '>
                            <div className='mt-4   mb-3'>
                                <label htmlFor=""></label>
                                {signupForm.errors.name && signupForm.touched.name ? (
                                    <div className="text-red-500">{signupForm.errors.name}</div>
                                ) : null}
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.name}
                                    className=' w-[280px] bg-transparent pb-1 border-b border-b-white font-bold font-sans text-center' placeholder='Your Name' />

                            </div>
                            <div className='mt-4  mb-3'>
                                <label htmlFor=""></label>
                                {signupForm.errors.email && signupForm.touched.email ? (
                                    <div className="text-red-500">{signupForm.errors.email}</div>
                                ) : null}
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.email}
                                    className='block bg-transparent border-b w-[280px] pb-1 border-b-white font-bold font-sans text-center' placeholder=' E-mail Address' />
                            </div>
                            <div className='mt-4  mb-3'>
                                <label htmlFor=""></label>
                                {signupForm.errors.password && signupForm.touched.password ? (
                                    <div className="text-red-500">{signupForm.errors.password}</div>
                                ) : null}
                                <input
                                    type="password"
                                    id='password'
                                    name='password'
                                    onChange={signupForm.handleChange}
                                    value={signupForm.values.password}
                                    className='block bg-transparent w-[280px] pb-1 border-b  border-b-white font-bold font-sans text-center' placeholder='Password' />
                            </div>
                            <div>
                                <button className='bg-cyan-100 text-blue-600 hover:bg-cyan-300 px-[30px] mt-5 rounded-3xl py-2 font-semibold font-sans'>SignUp Here</button>
                            </div>
                            <div className='mt-3 mb-3 mx-10 text-[13px] text-cyan-100 font-[550]'>
                                <p>By creating account. you agree and accept our <a className='underline' href="">Terms</a> and <a href="" className='underline'>Privecy Policy.</a></p>

                            </div>
                            <hr className='mt-3 w-full' />
                            <p className='pt-2 text-[13px] text-cyan-100 font-[550]'>Already have an account ? <Link  className='underline' href="/login">Login.</Link></p>
                        </div>
                    </div>
                </form>
                {/* <h1 className={classes.h} ></h1> */}
            </div>
        </>
    )
}

export default Signup
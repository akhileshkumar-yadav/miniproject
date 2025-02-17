'use client'
import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'

const ContactSchema = Yup.object().shape({
    FirstName: Yup.string()
    .min(3,'charecters used')
    .max(15,'charecter used')
    .required('FirstName is required'),
    LastName: Yup.string()
    .min(3,'charecters used')
    .max(15,'charecter used')
    .required('LastName is required'),
    email: Yup.string()
    .email('please enter a valid email address')
    .required('email is required'),
    
    tel: Yup.string()
    .min(10,'tel number must be 10 number')
    .required('password is required'),
    massege: Yup.string()
    .min(5,'charecters used')
    .max(100,'charecter used')
    .required('massege is required'),
  })
const ContactUs = () => {
    const contactForm = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            email: '',
            tel:'',
            massege:'',
        },
        onSubmit:(values,{resetForm}) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')

            axios.post('http://localhost:5000/contact/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('SignUp user info add successfully')
                    // router.push('/')

                }).catch((err) => {
                    console.log(err);
                    toast.error('Error')

                });
        },
        validationSchema:ContactSchema,
    })
  return (
    <>
        <div className='flex justify-center bg-cyan-50  items-center h-screen font-sans '>
            <div className='min-h-[450px] max-w-[300px]  md:min-w-[550px] text-white rounded-lg hover:bg-cyan-800 bg-cyan-700 shadow-lg '>
                <div className='flex justify-center mt-6'>
                    <img className='h-[50px]' src="Developer_Roadmap__1_-removebg-preview.png" alt="" />
                </div>
                <form onSubmit={contactForm.handleSubmit}>
                <div className='flex justify-center mt-5'>
                    <h1 className='text-3xl font-semibold text-cyan-200'>Contact Us</h1>
                </div>
                <div className='md:flex justify-center mt-6'>
                    <div className='flex flex-col'>
                    <div className='md:mx-5 mx-2'>
                    {contactForm.errors.FirstName && contactForm.touched.FirstName ? (
                                    <div className="text-red-500">{contactForm.errors.FirstName}</div>
                                ) : null}
                    </div>
                    
                    <label htmlFor=""></label>
                    
                    <input type="text"
                     placeholder='First Name '
                     id='FirstName'
                     name='FirstName'
                     onChange={contactForm.handleChange}
                     value={contactForm.values.FirstName}
                      className=' md:mx-5 mx-9 mb-3  pb-1  border-b w-[210px] border-b-white bg-transparent text-center font-semibold ' />
                      </div>
                      <div className='flex flex-col'>
                      <div className='md:mx-5 mx-2'>
                      {contactForm.errors.LastName && contactForm.touched.LastName ? (
                                    <div className="text-red-500">{contactForm.errors.LastName}</div>
                                ) : null}
                      </div>
                    <label htmlFor=""></label>
                    
                    <input type="text"
                     placeholder='Last Name' 
                     id='LastName'
                     name='LastName'
                     onChange={contactForm.handleChange}
                     value={contactForm.values.LastName}
                     className='md:mx-5 mx-9 mb-3 border-b  pb-1 border-b-white w-[210px] bg-transparent text-center font-semibold' />
                     </div>
                     
                </div>
            
                <div className='md:flex justify-center md:mt-6'>
                    <div className='flex flex-col'>
                    <div className='md:mx-3 mx-2'>
                    {contactForm.errors.email && contactForm.touched.email ? (
                                    <div className="text-red-500">{contactForm.errors.email}</div>
                                ) : null}
                    </div>
                    <label htmlFor=""></label>
                    
                    <input type="email" 
                    id='email'
                    name='email'
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                    placeholder='E-mail Address' 
                     className='md:mx-3 mx-9 mb-3 border-b pb-1 w-[210px] border-b-white bg-transparent text-center font-semibold'/>
                     </div>
                     <div className='flex flex-col'>
                     <div className='md:mx-12 mx-2'>
                     {contactForm.errors.tel && contactForm.touched.tel ? (
                                    <div className="text-red-500">{contactForm.errors.tel}</div>
                                ) : null}
                     </div>
                    <label htmlFor=""></label>
                    
                    <input type="tel" 
                    id='tel'
                    name='tel'
                    onChange={contactForm.handleChange}
                    value={contactForm.values.tel}
                    placeholder='Personal Contact No.' 
                    className='md:mx-5 mx-9 mb-3 pb-1 border-b w-[210px] border-b-white bg-transparent text-center font-semibold' />
                </div>
                </div>
                <div className='flex flex-col'>
                <div className='md:mx-12 mx-2 px-1'>{contactForm.errors.massege && contactForm.touched.massege ? (
                                    <div className="text-red-500">{contactForm.errors.massege}</div>
                                ) : null}</div>
                <div className='flex justify-center mt-3'>
                    <label htmlFor=""></label>
                    
                    <textarea  
                    id='massege'
                    name='massege'
                    onChange={contactForm.handleChange}
                    value={contactForm.values.massege}
                    placeholder='Your Massege Here' 
                    className='md:w-full md:mx-12 font-semibold bg-transparent  px-1 border-b border-b-white' ></textarea>
                </div>
                </div>
                <div  className='flex justify-center mt-8'>
                    <button type='submit' className=' px-8 py-1 bg-cyan-50 text-cyan-500 font-semibold hover:bg-cyan-100 text-lg rounded-3xl'>Submit</button>
                </div>
                <hr className='w-full mt-8'/>
                </form>
            </div>
        </div>
    </>
  )
}

export default ContactUs
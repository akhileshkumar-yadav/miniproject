'use client'
import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
const CategoryForm = () => {
    const categoryForm = useFormik({
        initialValues: {
            title: '',
            image: '',
            Description:'',

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')
            axios.post('http://localhost:5000/categoryForm/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('addform  info add successfully')
                    // router.push('/')

                }).catch((err) => {
                    console.log(err);
                    toast.error('Error')

                });

        },
    })
    return (
        <>
            <form action="" onSubmit={categoryForm.handleSubmit}>
                <div className='flex justify-center items-center h-full bg-cyan-700'>

                    <div className='flex w-[90%] justify-center items-center '>

                        <div className=' pl-8 pt-3 flex flex-col w-[70%] border-2 m-4 rounded-lg shadow-xl hover:shadow-2xl  text-xl font-semibold '>
                            <div className=' flex flex-col m-5 '>
                                <h1 className='text-2xl underline font-bold text-white text-center'>Developer Category  Form</h1>
                                <div className='w-full'>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id='title'
                                        name='title'
                                        placeholder='Title'
                                        onChange={categoryForm.handleChange}
                                        value={categoryForm.values.title}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                </div>
                                <div>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="image">image</label>
                                    <input
                                        name="image"
                                        id="image"
                                        placeholder='image'
                                        onChange={categoryForm.handleChange}
                                        value={categoryForm.values.image}
                                        className='border w-full  text-gray-100 mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    >

                                    </input>
                                </div>
                                <div>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Description</label>

                                    <textarea
                                        id='Description'
                                        name='Description'
                                        type="text"
                                        placeholder='Description'
                                        onChange={categoryForm.handleChange}
                                        value={categoryForm.values.Description}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center  mt-3'>
                                <button type='submit' className='bg-orange-400 p-1 w-[40%] hover:bg-orange-500 rounded-3xl mb-5 text-white text-lg font-semibold '> Submit</button>

                            </div>
                        </div>
                    </div>
                </div>

            </form>

        </>
    )
}

export default CategoryForm
















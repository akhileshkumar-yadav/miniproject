'use client'
import React, { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

const UpdateCategory = () => {

    const { id } = useParams()
    const [roadMapData, setroadMapData] = useState(null);

    const fetchRoadMapData = async () => {
        const res = await axios.get(`http://localhost:5000/categoryForm/getbyid/${id}`)
        console.log(res.data)
        setroadMapData(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const CategoryForm = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/categoryForm/updateCategory/' + id, values)
            .then((response) => {
                toast.success('form updated successfully')
                router.push('/manageCategory')

            }).catch((err) => {
                console.log(err)
                toast.error('Failed to update user')
            });

    }
    return (
        <div>
            {roadMapData !== null ? (
                <Formik initialValues={roadMapData} onSubmit={CategoryForm}>
                    {(updateCategory) => {
                        return <form action="" onSubmit={updateCategory.handleSubmit}>
                            <div className='flex justify-center items-center h-full bg-cyan-700'>

                                <div className='flex w-[90%] justify-center items-center '>

                                    <div className=' pl-8 pt-3 flex flex-col w-[70%] border-2 m-4 rounded-lg shadow-xl hover:shadow-2xl  text-xl font-semibold '>
                                        <div className=' flex flex-col m-5 '>
                                            <h1 className='text-2xl underline font-bold text-white text-center'>Developer Roadmap  Form</h1>
                                            <div className='w-full'>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Title</label>
                                                <input
                                                    type="text"
                                                    id='title'
                                                    name='title'
                                                    placeholder='Title'
                                                    onChange={updateCategory.handleChange}
                                                    value={updateCategory.values.title}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="Route">Route</label>
                                                <input
                                                    type="text"
                                                    id='Route'
                                                    name='Route'
                                                    placeholder='Route'
                                                    onChange={updateCategory.handleChange}
                                                    value={updateCategory.values.Route}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="image">image</label>
                                                <input
                                                    type="text"
                                                    id='image'
                                                    name='image'
                                                    placeholder='image'
                                                    onChange={updateCategory.handleChange}
                                                    value={updateCategory.values.image}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                            </div>
                                            <div>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="Description">Description</label>
                                                <textarea
                                                    name="Description"
                                                    id="Description"
                                                    placeholder='Introduction'
                                                    onChange={updateCategory.handleChange}
                                                    value={updateCategory.values.Description}
                                                    className='border w-full  text-gray-100 mb-5 bg-transparent pl-5 p-1 rounded-md'
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
                    }}
                </Formik>
            ) : (
                <p>Loading....</p>
            )}

        </div>
    )
}

export default UpdateCategory
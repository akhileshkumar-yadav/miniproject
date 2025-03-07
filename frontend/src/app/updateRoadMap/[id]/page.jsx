'use client'
import React, { useState, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

const UpdateRoadmap = () => {

    const { id } = useParams()
    const [roadMapData, setroadMapData] = useState(null);

    const fetchRoadMapData = async () => {
        const res = await axios.get(`http://localhost:5000/addform/getbyid/${id}`)
        console.log(res.data)
        setroadMapData(res.data)
    }

    useEffect(() => {
        fetchRoadMapData()
    }, [])

    const router = useRouter()

    const AddForm = (values) => {
        console.log(values)

        axios.put('http://localhost:5000/addform/updateRoadMap/' + id, values)
            .then((response) => {
                toast.success('form updated successfully')
                // router.push('/manageListing')

            }).catch((err) => {
                console.log(err)
                toast.error('Failed to update user')
            });

    }
    return (
        <div>
            {roadMapData !== null ? (
                <Formik initialValues={roadMapData} onSubmit={AddForm}>
                    {(updateRoadForm) => {
                        return <form action="" onSubmit={updateRoadForm.handleSubmit}>
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
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.title}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">category</label>
                                                <input
                                                    type="text"
                                                    id='category'
                                                    name='category'
                                                    placeholder='category'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.category}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                            </div>
                                            <div>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Introduction</label>
                                                <textarea
                                                    name="intro"
                                                    id="intro"
                                                    placeholder='Introduction'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.intro}
                                                    className='border w-full  text-gray-100 mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                >

                                                </textarea>
                                            </div>
                                           
                                            <div>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">What</label>
                                                <input
                                                    type="text"
                                                    id='whatHeading'
                                                    name='whatHeading'
                                                    placeholder='Title'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.whatHeading}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                                <textarea
                                                    id='what'
                                                    name='what'
                                                    type="text"
                                                    placeholder='What'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.what}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                >
                                                </textarea>
                                            </div>
                                            <div>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Why</label>
                                                <input
                                                    type="text"
                                                    id='whyHeading'
                                                    name='whyHeading'
                                                    placeholder='Title'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.whyHeading}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                                <textarea
                                                    type="text"
                                                    id='why'
                                                    name='why'
                                                    placeholder='why'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.why}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                >
                                                </textarea>
                                            </div>
                                            <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Image</label>
                                    <input
                                        type="text"
                                        id='image1'
                                        name='image1'
                                        placeholder='Title'
                                        onChange={updateRoadForm.handleChange}
                                        value={updateRoadForm.values.image1}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image2'
                                        name='image2'
                                        placeholder='Title'
                                        onChange={updateRoadForm.handleChange}
                                        value={updateRoadForm.values.image2}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image3'
                                        name='image3'
                                        placeholder='Title'
                                        onChange={updateRoadForm.handleChange}
                                        value={updateRoadForm.values.image3}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image4'
                                        name='image4'
                                        placeholder='Title'
                                        onChange={updateRoadForm.handleChange}
                                        value={updateRoadForm.values.image4}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image5'
                                        name='image5'
                                        placeholder='Title'
                                        onChange={updateRoadForm.handleChange}
                                        value={updateRoadForm.values.image5}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                            <div>
                                                <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Head</label>
                                                <input
                                                    type="text"
                                                    id='head'
                                                    name='head'
                                                    placeholder='Head'
                                                    onChange={updateRoadForm.handleChange}
                                                    value={updateRoadForm.values.head}
                                                    className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                />
                                                <li className='mt-3 list-disc text-gray-100  w-full' >
                                                    <ul>
                                                        <input
                                                            type="text"
                                                            id='head1'
                                                            name='head1'
                                                            placeholder='Head'
                                                            onChange={updateRoadForm.handleChange}
                                                            value={updateRoadForm.values.head1}
                                                            className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                        />
                                                    </ul>
                                                </li>
                                                <li className='mt-3 list-disc text-gray-100  w-full' >
                                                    <ul>
                                                        <input
                                                            type="text"
                                                            id='head2'
                                                            name='head2'
                                                            placeholder='Head'
                                                            onChange={updateRoadForm.handleChange}
                                                            value={updateRoadForm.values.head2}
                                                            className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                        />
                                                    </ul>
                                                </li>
                                                <li className='mt-3 list-disc text-gray-100  w-full' >
                                                    <ul>
                                                        <input
                                                            type="text"
                                                            id='head3'
                                                            name='head3'
                                                            placeholder='Head'
                                                            onChange={updateRoadForm.handleChange}
                                                            value={updateRoadForm.values.head3}
                                                            className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                        />
                                                    </ul>
                                                </li>
                                                <li className='mt-3 list-disc text-gray-100  w-full' >
                                                    <ul>
                                                        <input
                                                            type="text"
                                                            id='head4'
                                                            name='head4'
                                                            placeholder='Head'
                                                            onChange={updateRoadForm.handleChange}
                                                            value={updateRoadForm.values.head4}
                                                            className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                        />
                                                    </ul>
                                                </li>
                                                <li className='mt-3 list-disc text-gray-100  w-full' >
                                                    <ul>
                                                        <input
                                                            type="text"
                                                            id='head5'
                                                            name='head5'
                                                            placeholder='Head'
                                                            onChange={updateRoadForm.handleChange}
                                                            value={updateRoadForm.values.head5}
                                                            className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                                        />
                                                    </ul>
                                                </li>
                                            </div>
                                            <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                                
                                                <ol className=' '>
                                                    <input
                                                        type="text"
                                                        id='step1'
                                                        name='step1'
                                                        placeholder='step1'
                                                        onChange={updateRoadForm.handleChange}
                                                        value={updateRoadForm.values.step1}
                                                        className='pl-5 text-gray-100 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                                </ol>
                                            </li>
                                            <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                                
                                                <ol className=''>
                                                    <input
                                                        type="text"
                                                        id='step2'
                                                        name='step2'
                                                        placeholder='step2'
                                                        onChange={updateRoadForm.handleChange}
                                                        value={updateRoadForm.values.step2}
                                                        className='pl-5 bg-transparent text-gray-100 w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                                </ol>
                                            </li>
                                            <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                               
                                                <ol className=''>
                                                    <input
                                                        type="text"
                                                        id='step3'
                                                        name='step3'
                                                        placeholder='step3'
                                                        onChange={updateRoadForm.handleChange}
                                                        value={updateRoadForm.values.step3}
                                                        className='pl-5 bg-transparent w-full text-gray-100 mb-4 p-1 text-xl font-semibold border rounded' />
                                                </ol>
                                            </li>
                                            <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                                
                                                <ol className=''>
                                                    <input
                                                        type="text"
                                                        id='step4'
                                                        name='step4'
                                                        placeholder='step4'
                                                        onChange={updateRoadForm.handleChange}
                                                        value={updateRoadForm.values.step4}
                                                        className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                                </ol>
                                            </li>
                                            <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                                
                                                <ol className=''>
                                                    <input
                                                        type="text"
                                                        id='step5'
                                                        name='step5'
                                                        placeholder='step5'
                                                        onChange={updateRoadForm.handleChange}
                                                        value={updateRoadForm.values.step5}
                                                        className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                                </ol>
                                            </li>
                                            
                                            
                                            
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

export default UpdateRoadmap
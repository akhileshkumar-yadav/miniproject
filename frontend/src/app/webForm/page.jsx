'use client'
import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
const AddForm = () => {
    const webForm = useFormik({
        initialValues: {
            title: '',
            name: '',
            head: '',
            category:'',
            intro: '',
            introHeading:'',
            what: '',
            Description:'',
            why: '',
            heading: '',
            step1: '',
            step2: '',
            step3: '',
            step4: '',
            step5: '',
            step6: '',
            step7: '',
            step8: '',
            head1:'',
            head2:'',
            head3:'',
            head4:'',
            head5:'',
            image1:'',
            image2:'',
            image3:'',
            image4:'',
            image5:'',
            heading1:'',
            heading2:'',
            heading3:'',
            heading4:'',
            heading5:'',
            heading6:'',
            heading7:'',
            heading8:'',
            whyHeading:'',
            whatHeading:'',
            heading10:'',
            heading11:'',
            heading12:'',
            heading13:'',
            heading14:'',
            heading15:'',
            heading16:'',
            heading17:'',
            heading18:'',
            heading19:'',
            heading10:'',
            heading21:'',
            heading22:'',

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            // resetForm()
            // toast.success('signup successfull')
            axios.post('http://localhost:5000/webForm/add', values)
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
            <form action="" onSubmit={webForm.handleSubmit}>
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
                                        onChange={webForm.handleChange}
                                        value={webForm.values.title}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                </div>
                                <div>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Introduction</label>
                                    <textarea
                                        name="intro"
                                        id="intro"
                                        placeholder='Introduction'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.intro}
                                        className='border w-full  text-gray-100 mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    >

                                    </textarea>
                                    <textarea
                                        name="introHeading"
                                        id="introHeading"
                                        placeholder='IntroductionHeading'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.introHeading}
                                        className='border w-full  text-gray-100 mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    >

                                    </textarea>
                                </div>
                                <div>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Description</label>

                                    <textarea
                                        id='Description'
                                        name='Description'
                                        type="text"
                                        placeholder='Description'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.Description}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
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
                                        onChange={webForm.handleChange}
                                        value={webForm.values.whatHeading}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Image</label>
                                    <input
                                        type="text"
                                        id='image1'
                                        name='image1'
                                        placeholder='Title'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.image1}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image2'
                                        name='image2'
                                        placeholder='Title'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.image2}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image3'
                                        name='image3'
                                        placeholder='Title'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.image3}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='category'
                                        name='category'
                                        placeholder='category'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.category}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image4'
                                        name='image4'
                                        placeholder='Title'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.image4}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <input
                                        type="text"
                                        id='image5'
                                        name='image5'
                                        placeholder='Title'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.image5}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <textarea
                                        id='what'
                                        name='what'
                                        type="text"
                                        placeholder='What'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.what}
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
                                        onChange={webForm.handleChange}
                                        value={webForm.values.whyHeading}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <textarea
                                        type="text"
                                        id='why'
                                        name='why'
                                        placeholder='why'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.why}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    >
                                    </textarea>
                                </div>
                                <div>
                                    <label className='block pl-5 text-gray-100 pb-1' htmlFor="">Head</label>
                                    <input
                                        type="text"
                                        id='head'
                                        name='head'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                    <li className = 'mt-3 list-disc text-gray-100  w-full' >
                                        <ul>
                                        <input
                                        type="text"
                                        id='head1'
                                        name='head1'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head1}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                        </ul>
                                    </li>
                                    <li className = 'mt-3 list-disc text-gray-100  w-full' >
                                        <ul>
                                        <input
                                        type="text"
                                        id='head2'
                                        name='head2'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head2}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                        </ul>
                                    </li>
                                    <li className = 'mt-3 list-disc text-gray-100  w-full' >
                                        <ul>
                                        <input
                                        type="text"
                                        id='head3'
                                        name='head3'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head3}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                        </ul>
                                    </li>
                                    <li className = 'mt-3 list-disc text-gray-100  w-full' >
                                        <ul>
                                        <input
                                        type="text"
                                        id='head4'
                                        name='head4'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head4}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                        </ul>
                                    </li>
                                    <li className = 'mt-3 list-disc text-gray-100  w-full' >
                                        <ul>
                                        <input
                                        type="text"
                                        id='head5'
                                        name='head5'
                                        placeholder='Head'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.head5}
                                        className='border w-full text-gray-100  mb-5 bg-transparent pl-5 p-1 rounded-md'
                                    />
                                        </ul>
                                    </li>
                                </div>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=' '>
                                        <input
                                            type="text"
                                            id='heading'
                                            name='heading1'
                                            placeholder='Head1'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading1}
                                            className='pl-5 text-gray-100 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=' '>
                                        <input
                                            type="text"
                                            id='step1'
                                            name='step1'
                                            placeholder='step1'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step1}
                                            className='pl-5 text-gray-100 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading2'
                                            name='heading2'
                                            placeholder='Head2'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading2}
                                            className='pl-5 bg-transparent text-gray-100 w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step2'
                                            name='step2'
                                            placeholder='step2'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step2}
                                            className='pl-5 bg-transparent text-gray-100 w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading3'
                                            name='heading3'
                                            placeholder='Head3'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading3}
                                            className='pl-5 bg-transparent w-full text-gray-100 mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step3'
                                            name='step3'
                                            placeholder='step3'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step3}
                                            className='pl-5 bg-transparent w-full text-gray-100 mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading4'
                                            name='heading4'
                                            placeholder='Head4'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading4}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step4'
                                            name='step4'
                                            placeholder='step4'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step4}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading5'
                                            name='heading5'
                                            placeholder='Head5'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading5}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step5'
                                            name='step5'
                                            placeholder='step5'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step5}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading6'
                                            name='heading6'
                                            placeholder='Head6'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading6}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step6'
                                            name='step6'
                                            placeholder='step6'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step6}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100  w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='heading7'
                                            name='heading7'
                                            placeholder='Head7'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading7}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step7'
                                            name='step7'
                                            placeholder='step7'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step7}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                </li>
                                <li className=' mt-3 list-decimal text-gray-100 w-full '>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step8'
                                            name='head8'
                                            placeholder='Head8'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.heading8}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>
                                    <ol className=''>
                                        <input
                                            type="text"
                                            id='step8'
                                            name='step8'
                                            placeholder='step8'
                                            onChange={webForm.handleChange}
                                            value={webForm.values.step8}
                                            className='pl-5 bg-transparent w-full mb-4 p-1 text-xl font-semibold border rounded' />
                                    </ol>

                                </li>
                            </div>
                            <div className='flex flex-row'>
                                <div className=' pl-2 pt-3 font-semibold text-xl '>
                                    <label htmlFor="" className='mx-4 block text-gray-100'>RoadmapName</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.name}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />

                                </div>
                                <div className=' pl-2 pt-3 font-semibold text-xl   '>
                                    <label htmlFor="" className='mx-4 block text-gray-100'>Head</label>
                                    <input
                                        type="text"
                                        name="heading11"
                                        id="heading11"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading11}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading12"
                                        id="heading12"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading12}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading13"
                                        id="heading13"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading13}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading14"
                                        id="heading14"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading14}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading15"
                                        id="heading15"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading15}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading16"
                                        id="heading16"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading16}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading17"
                                        id="heading17"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading17}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading18"
                                        id="heading18"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading18}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading19"
                                        id="heading19"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading19}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading20"
                                        id="heading20"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading20}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading21"
                                        id="heading21"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading21}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />
                                    <input
                                        type="text"
                                        name="heading22"
                                        id="heading22"
                                        placeholder='Link'
                                        onChange={webForm.handleChange}
                                        value={webForm.values.heading22}
                                        className='border text-gray-100 w-[70%] mx-4  mb-3 bg-transparent pl-5 p-1 rounded-md' />

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

export default AddForm
















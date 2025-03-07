'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'


const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/webForm/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setProduct(data);
        console.log(data)
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    

  return (
    <div className='bg-blue-100'>
    <div className='p-5'>
      <h1 className='text-center text-4xl font-semibold'>{product.title}</h1>
      {/* <h2>{product.introHeading}</h2> */}
      <h1 className='text-lg mt-5'>{product.intro}</h1>
      {/* <h3>{product.title}</h3> */}
      <img  src={product.image2} alt="" className="img-fluid ms-3 ml-[400px] mt-5" style={{height:"300px ", width:"500px"}} />
      <h1 className='text-2xl font-semibold'>{product.whatHeading}</h1>
      <h1>{product.what}</h1>
    </div>
    </div>
  )
}

export default View
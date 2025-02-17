'use client'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'


const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/addform/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setProduct(data);
        console.log(data)
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <h3>{product.title}</h3>
      <img src={product.image} alt="" className="img-fluid ms-3" style={{height:"200px"}} />
    </div>
  )
}

export default View
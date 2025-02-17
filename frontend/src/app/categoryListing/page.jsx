'use client'
import Slider from "react-slick";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import classes from './listing.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AddForm from "../addForm/page";



const CategoryListing = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 15,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 1000,
  //   cssEase: "linear"
  // };
  const [listing, setListing] = useState([])
  const [filterListing, setFilterListing] = useState([])

  const fetchRoadmapListing = async () => {
    const res = await fetch("http://localhost:5000/categoryForm/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setListing(data);
      setFilterListing(data)
      console.log(filterListing);
      
    }
  };
  useEffect(() => {
    fetchRoadmapListing();
  }, []);

  const applysearch = (e) => {
    const value = e.target.value;
    setListing(listing.filter((listing) => {
      return (listing.title.toLowerCase().includes(e.target.value.toLowerCase()))
    }))
  }

  const filterByCategory = (listing) => {
    console.log(listing);
    const filteredListing = filterListing.filter(col => col.title.toLowerCase().includes(listing.toLowerCase()))
    setListing(filteredListing)
    
  }


  return (
    <>
      <div className="">
        {/* <div className='hidden lg:flex justify-evenly items-center text-white  w-full bg-cyan-500'>
          <div className='text-md font-semibold  m-2   w-full'>
            <div className="slider-container">
              <Slider {...settings}>
                {
                  listing.map((item) => {
                    return <div className=' hover:text-blue-800 w-[100px] '>{item.name}</div>
                  })
                }

              </Slider>
            </div>
          </div>
        </div> */}
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
                Developer RoadMap
              </h1>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Stay in the know with insights from industry experts.
              </p>
              <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                {/* Form */}
                <form>
                  <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                    <div className="w-full">
                      <label
                        htmlFor="hs-search-article-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        {/* <span className="sr-only">Search article</span> */}
                      </label>
                      <input
                        type="email"
                        name="hs-search-article-1"
                        id="hs-search-article-1"
                        onChange={applysearch}
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Search article"
                      />
                    </div>
                    <div>
                      <a
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={11} cy={11} r={8} />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
                {/* End Form */}
                {/* SVG Element */}
                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
                {/* SVG Element */}
                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                  <svg
                    className="w-40 h-auto text-cyan-500"
                    width={347}
                    height={188}
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      strokeWidth={7}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
              <div className="mt-10 sm:mt-20">
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={(e) => filterByCategory('Web Development')}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  Web Development
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={(e) => filterByCategory('Mobile App Development')}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  App Development
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  onClick={(e) => filterByCategory('Cyber Security')}
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  Cyber Security
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="m-5">
          <h1 className="text-2xl font-bold text-center mt-4">DEVELOPERS ROADMAPS</h1>
          <hr className="border-2 shadow-2xl border-gray-400" />
          <div className="flex flex-wrap m-2">

            {
              listing.map((item) => {
                return <div className=' w-full md:w-1/2  lg:w-1/4 mb-6 mt-5  ' key={item._id}>
                  <div className=" relative ">
                    <div className={classes.div1}>

                      <div className='z-20 text-white'>
                        <h1 className="font-semibold text-xl text-center px-3  ">{item.title}</h1>
                        {/* <h1 className="font-semibold text-md px-3 ">{item.title}</h1> */}

                        <div className="flex mt-4 px-3">
                          <Link className="" href={'/viewPage/' + item._id}>
                            <button className="animate-pulse mx-auto font-medium hover:bg-pink-500 bg-pink-400 rounded-lg px-2 py-1">
                              View more
                            </button>
                          </Link>
                        </div>
                      </div>
                        <div className="absolute z-10 top-1  left-1">
                           <img className="h-[290px] w-[340px] rounded-lg" src={item.image} alt="" />
                        </div>
                    </div>
                  </div>

                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryListing
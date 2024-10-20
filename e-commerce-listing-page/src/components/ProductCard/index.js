import React from 'react'
import {Link} from "react-router-dom"
import { IoIosHeartEmpty } from "react-icons/io";
import fiveStarImg from "../../assets/productsImg/fivestarimg.png"


const ProductCard = props=> {
    const {productData} = props
    const {id,img} = productData

  return (
    <li className='"flex flex-col justify-center items-center w-[300px]'>
        <div>
            <div className='flex justify-end'>
                <button><IoIosHeartEmpty/></button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={img} alt={`product ${id}`} className='h-[200px]'/>
            </div>
            <Link to="/thankyou">
                <button className='text-white bg-green-800 p-2 w-full'>View Product</button>
            </Link>
        </div>
        <div className='text-left mt-4 gap-3 p-2'>
            <h3 className='font-semibold text-[18px]'>Monsterra</h3>
            <p className='text-gray-400 text-[14px]'>Indoor Plant, Low maintenance</p>
            <div className='flex gap-4'>
                <img src={fiveStarImg} alt='fivestar'/>
                <p className='text-gray-400 text-[14px]'>4.9</p>
            </div>
            <div className='flex gap-4'>
                <p className='text-gray-400 text-[14px] line-through'>₹ 359</p>
                <p className='font-semibold'>₹ 299</p>
            </div>
            <div className='flex justify-between'>
                <button type='button' className='bg-green-800 text-white font-semibold rounded-lg text-sm p-2 text-center'
                ><span>-</span> Add to cart <span>+</span></button>
                <button type="button" className="text-green-900 border border-green-900 font-semibold rounded-lg text-sm p-2 text-center ">Buy on Rent</button>
            </div>
        </div>
    </li>
  )

}

export default ProductCard
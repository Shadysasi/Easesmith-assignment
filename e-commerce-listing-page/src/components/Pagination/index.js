import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import ProductList from '../ProductList';


const Pagination = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-6 mb-4 p-6'>
      <div className='bg-green-100 p-4 md:w-2/4 h-full'>
        <div className='flex justify-between'>
          <p className='text-gray-500 text-[14px]'>Filter</p>
          <button className='text-gray-500 text-[14px]'>CLEAR ALL</button>
        </div>
        <hr className='my-8 text-black-700'/>
        <ul>
        {
          filterCategories.map(category=>(
            <li key={category}>
              <div className='flex justify-between'>
                <p className='text-gray-500 text-[14px]'>{category}</p>
                <button className='text-gray-500 text-[14px]'>+</button>
              </div>
              <hr className='m-2'/>
            </li>
          ))
        }
        </ul>  
      </div>
      <div>
        <div className='flex gap-4 mb-6'>
          <p className='text-gray-500 text-[14px]'>300 products</p>
          <button className='bg-green-800 text-xs text-white font-semibold flex items-center gap-2 p-2'>SORT BY <span className='transition-all duration-200 group-hover:rotate-180'><FaAngleDown/></span></button>
        </div>
        <ProductList/>
        <div className='flex justify-center items-center'>
          <button className='bg-green-800 text-white font-semibold rounded-lg text-sm p-2 text-center mt-4'>View More</button>
        </div>
      </div>
    </div>
  )
}

const filterCategories=["Type of Plants","Price","Nursery","Ideal Plants Location","Indoor/ Outdoor","Maintenance","Plant Size","Water Schedule","Color","Seasonal","Light Efficient"]
export default Pagination
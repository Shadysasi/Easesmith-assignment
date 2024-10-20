import React from 'react'
import plantImg from "../../assets/plantimg.png"
import ReactSlick from "../ReactSlick"
import { FaSearch } from "react-icons/fa";
import Header from '../Header';
import Pagination from '../Pagination';
import Footer from '../Footer';

const Main = () => {
  return (
    <>
        <Header/>
        <div className=' p-6'>
            <div className='flex justify-center items-center mb-4 '>
                <FaSearch className='text-gray-400 '/>
                <input type="search" placeholder='Search Plant' 
                className='w-[250px] sm:w-[250px] group-hover:w-[300px] transition-all py-1 px-2 
                            focus:outline-none focus:border-1 focus:border-primary '/>
                <img src={plantImg} alt="search plant" className='h-5'/>
            </div>
            <div className="flex space-x-4 mb-4">
                <button className="bg-green-900 text-white text-sm font-bold p-1 pr-6 pl-6 drop-shadow" >Plants</button>
                <button className="bg-gray-200 text-gray-400 text-sm font-bold p-1 pr-6 pl-6">Pots</button>
            </div>
            <div className="mb-4">
                <p className='text-base text-left text-[#838383]'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <section>
                <h3 className='text-lg text-left font-bold mb-4'>Nursery</h3>
                <div>
                    <ReactSlick/>
                </div>
            </section>
        </div>
        <Pagination/>
        <Footer/>
    </>
  )
}

export default Main
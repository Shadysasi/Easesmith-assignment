import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/chaperoneLogo.png'

const Header = () => {
  return (
    <header className=' '>
        <div className='bg-green-700 text-white grid grid-flow-col justify-items-stretch mb-4 px-2'>
            <p className='justify-self-end text-sm md:text-lg'>Free Shipping on orders above 999/-</p>
            <p className='justify-self-end text-sm md:text-lg'>Call us on: +91 98768 05120</p>
        </div>
        <div className='flex justify-around'>
            <a href='/#'><img src={logo} alt='chaperone logo' className='h-10 w-25 mr-2'/></a>
            <div className='hidden md:block'>
                <ul className="flex items-center space-x-4 ">
                    <li><a href='/#' className='max-w-xs text-base font-medium hover:underline'>Home</a></li>
                    <li><a href='/#' className='max-w-xs text-base font-medium hover:underline'>Plants & Pots</a></li>
                    <select  className="select max-w-xs text-base font-medium hover:underline">
                        <option disabled selected>Tools</option>
                    </select>
                    <select  className="select max-w-xs text-base font-medium hover:underline">
                        <option disabled selected>Our Services</option>
                    </select>
                    <li><a href='/#' className='max-w-xs text-base font-medium hover:underline'>Blog</a></li>
                    <li><a href='/#' className='max-w-xs text-base font-medium hover:underline'>Our Story</a></li>
                    <li><a href='/#' className='max-w-xs text-base font-medium hover:underline'>FAQs</a></li>
                </ul>
            </div>
            <div className='md:hidden'>
                <IoMdMenu size={30}/>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-center items-center mr-4'>
                    <CgProfile/>
                    <p className='text-xs font-medium'>My Profile</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <BsCart2/>
                    <p className='text-xs font-medium'>Cart</p>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;

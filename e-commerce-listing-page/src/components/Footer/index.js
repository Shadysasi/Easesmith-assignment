import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
        return (
          <footer className="bg-green-100  p-10 ">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              <div className='text-left'>
                <h2 className="font-semibold text-lg  mb-2">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text-sm text-gray-400 mb-4">Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesebus Enim</p>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full p-2 h-[25px] border border-gray-300 rounded mb-2 text-[12px]"
                />
                <button className="bg-green-500 text-white text-[12px] p-2 rounded-xl hover:bg-green-700 font-semibold w-2/4 h-[25px] flex justify-center items-center">SUBSCRIBE</button>
              </div>
              <div className='text-left'>
                <h2 className="font-semibold text-lg mb-4">ABOUT US</h2>
                <ul className='text-gray-400'>
                  <li className="mb-2"><a href="/#" className="hover:underline">Blogs</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Careers</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Contact Us</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Help & Support</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Our Story</a></li>
                </ul>
              </div>
              <div className='text-left'>
                <h2 className="font-semibold text-lg mb-4">OUR SERVICES</h2>
                <ul className='text-gray-400'>
                  <li className="mb-2"><a href="/#" className="hover:underline">Block maali</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Plant Day Care</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Rent Plants</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Plants & Pots</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Gardening Tools</a></li>
                </ul>
              </div>
              <div className='text-left'>
                <h2 className="font-semibold text-lg mb-4">USEFUL LINKS</h2>
                <ul className='text-gray-400'>
                  <li className="mb-2"><a href="/#" className="hover:underline">My Account</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Orders & Returns</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Track Order</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Terms & Conditions</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Privacy Policy</a></li>
                </ul>
              </div>
              <div className='text-left'>
                <h2 className="font-semibold text-lg mb-4">GET IN TOUCH</h2>
                <ul className='text-gray-400'>
                  <li className="mb-2"><a href="/#" className="hover:underline">Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Call: +919958287272</a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline">Email: care@chaperoneplants.com</a></li>
                </ul>
              </div>    
            </div>
            <div className='mb-4 text-left'>
                <h2 className='font-semibold text-lg text-left mb-4'>CHAPERONE</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            </div>
            <div className='mb-4 text-left'>
                <h2 className='font-semibold text-lg text-left mb-4'>Follow us on</h2>
                <ul className='w-[150px] flex  justify-between gap-2'>
                  <li className="mb-2"><a href="/#" className="hover:underline"><FaInstagram/></a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline"><FaFacebook/></a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline"><FaSquareThreads/></a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline"><FaYoutube/></a></li>
                  <li className="mb-2"><a href="/#" className="hover:underline"><FaLinkedin/></a></li>
                </ul>
            </div>
            <hr/>
            <div className="mt-10 text-center text-gray-600">
              &copy; 2023 chaperone.com. All rights reserved.
            </div>
          </footer>
        );
}

export default Footer
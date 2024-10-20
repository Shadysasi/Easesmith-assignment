import React from 'react'
import botplant from '../../assets/botplant.png'
import x from '../../assets/x.png'

const ThankYouPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-50'>
        
        <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-md'>
        <div className='flex items-end justify-end'>
            <img src={x} alt='cross'/>
        </div>
            <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
            <hr className='mb-4'/>
            <h3 className='text-2xl font-bold text-green-600 mb-6'>Congratulations <br/> Order Placed!</h3>
            <div className='mb-6'>
                <img src={botplant} alt='plant' className='mx-auto'/>
            </div>
            <p className="text-gray-700 mb-6">Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
            <button className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'>CONTINUE SHOPPING</button>  
        </div>
    </div>
  )
}

export default ThankYouPage
import React from 'react'
import product1 from "../../assets/productsImg/product1.png"
import product2 from "../../assets/productsImg/product2.png"
import product3 from "../../assets/productsImg/product3.png"
import ProductCard from '../ProductCard'

const ProductList = () => {
  return (
    <ul className='flex justify-center items-center flex-wrap gap-4'>
        {ProductsData.map(product=>(
            <ProductCard productData={product} key={product.id}/>
            ))}
    </ul>
    
  )
}

const ProductsData=[
    {
        id:"1",
        img:product1,
    },
    {
        id:"2",
        img:product2,
    },
    {
        id:"3",
        img:product3,
    },
    {
        id:"4",
        img:product1,
    },
    {
        id:"5",
        img:product2,
    },
    {
        id:"6",
        img:product3,
    },
    {
        id:"7",
        img:product1,
    },
    {
        id:"8",
        img:product2,
    },
    {
        id:"9",
        img:product3,
    }
    
]

export default ProductList
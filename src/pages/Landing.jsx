import React from 'react'
import { Hero } from '../components'
import { customFetch } from '../utils';

const url = '/products?featured=true';
const url1='/products?shipping=true'
export const loader=async()=>{
const featuredProducts=await customFetch(url)
const shiipngdProducts=await customFetch(url1)
console.log("featured are",featuredProducts);

console.log("shipping are",shiipngdProducts);

return null
}
const Landing = () => {
  return (
   <>
   
   <Hero/>
   </>
  )
}

export default Landing
import { useEffect } from 'react';
import CartUser from '../components/CartUser'

function Cart() {
  useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })
  return (
    <div data-aos="fade-up" style={{paddingTop:"120px"}} className=''>
        <h1 className='text-center mt-3'>Your <span className='text-success'>Order</span></h1>
        <CartUser />
    </div>
  )
}

export default Cart
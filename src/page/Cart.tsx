import CartUser from '../components/CartUser'

function Cart() {
  return (
    <div style={{paddingTop:"120px"}} className=''>
        <h1 className='text-center mt-3'>Your <span className='text-success'>Order</span></h1>
        <CartUser />
    </div>
  )
}

export default Cart
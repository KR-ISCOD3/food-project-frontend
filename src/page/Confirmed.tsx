
import { NavLink } from 'react-router-dom'

function Confirmed() {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center py-5'>
        <div className='py-5 my-5 text-center '>
            <div className='mx-auto'style={{width:200}}>
                <img src="image/tick.png" alt="" width={200} className='w-100 object-fit-cover'/>
            </div>
            <div className='text-center'>
                <h2 className='text-center'>Thank you for your purchase!</h2>
                <h5 className='text-center text-secondary'>You has been confirmed</h5>
                <NavLink to={'/'}>
                    <button className='btn btn-outline-success px-4 py-2 fs-5 mt-2'>
                        Go to home
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Confirmed
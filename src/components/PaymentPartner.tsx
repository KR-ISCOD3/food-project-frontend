
function PaymentPartner() {
  return (
    <div className='container-fluid bg-wildlife '>
        <div className="container">
            <div className="row p-4 justify-content-between">
                <div className="col-6">
                    <h2 className="m-0">Our Payment <span className="text-success">Partner</span>🪙</h2>
                </div>
                <div className='col-6'>
                  <ul className='nav justify-content-end align-items-center'>
                      <li style={{width:30,height:30}} className='border border-1 bg-success mx-1 rounded-circle overflow-hidden'>
                        <img src="image/aba.png" alt="" className='w-100 h-100 object-fit-cover' />
                      </li>
                      <li style={{width:30,height:30}} className='border border-1 bg-success mx-1 rounded-circle overflow-hidden'>
                      <img src="image/acleda.png" alt="" className='w-100 h-100 object-fit-cover overflow-hidden' />
                      </li>
                      <li style={{width:30,height:30}} className='border border-1 bg-success mx-1 rounded-circle overflow-hidden'>
                      <img src="image/ftb.png" alt="" className='w-100 h-100 object-fit-cover' />
                      </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPartner
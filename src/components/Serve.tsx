import "../scss/serve.scss"

function Serve() {
  return (
    <section className="container">
      <div data-aos="fade-up" className="col-12 col-md-7 col-lg-6 text-center mx-auto mt-4">
        <h4 className="m-0 text-green">How is works</h4>
        <h2 className="m-0">What we serve</h2>
        <p className="text-secondary fs-5">
          Freshness and Quality You Can Trust, Delivered Straight to Your Door.
          Every Meal Is Prepared with Care to Ensure the Best Experience for You
          and Your Family.
        </p>
      </div>
      <div className="paddx d-flex justify-content-start m-0 text-center w-100 overflow-x-scroll" >  
        <div data-aos="fade-up" data-aos-delay="100" className="col-6 col-md-4 my-3">
          <div className="card text-center p-3 border-0">
            <div style={{height:120}}>
              <img src="image/bag.gif" alt="" className="w-100 h-100 object-fit-contain"/>
            </div>
            <div className="card-body p-0">
              <h2 className="m-0">Easy To Order</h2>
              <p className="fs-5 text-secondary">You only order through app</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="col-6 col-md-4 my-3">
          <div className="card text-center p-3 border-0">
            <div style={{height:120}}>
              <img src="image/delievery.gif" alt="" className="w-100 h-100 object-fit-contain"/>
            </div>
            <div className="card-body p-0">
              <h2 className="m-0">Fast Delievery</h2>
              <p className="fs-5 text-secondary">Delievery will be on time</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="col-6 col-md-4 my-3">
          <div className="card text-center p-3 border-0">
            <div style={{height:120}}>
              <img src="image/quality.gif" alt="" className="w-100 h-100 object-fit-contain"/>
            </div>
            <div className="card-body p-0">
              <h2 className="m-0">Best Quality</h2>
              <p className="fs-5 text-secondary">The best quality of food for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serve;

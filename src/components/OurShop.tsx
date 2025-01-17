import "../scss/ourshop.scss";
const OurShop: React.FC = () => {
  return (
    <section>
      <div className="container p-0 py-lg-2">
        <div className="row m-0 rounded-5 pt-2 pb-5 p-md-5  mb-3 ">
          <div data-aos="zoom-in" data-aos-delay="200" className="col-md-6 px-lg-5 text-center text-md-start d-grid align-content-center">
            <p className="m-0 fs-5">If you chose us.</p>
            <h1>
              Our <span className="text-success">Restaurant!</span>
            </h1>
            <p className="ps-md-1 fs-5 text-secondary">
              Where we offer a delightful dining experience combining great food
              and exceptional service. Our chefs use only the freshest
              ingredients to create delicious dishes, ranging from classic
              favorites to new culinary creations.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" className="col-md-6 p-md-0">
            <div className="shape mx-auto"></div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default OurShop;

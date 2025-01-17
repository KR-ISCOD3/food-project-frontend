import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero row m-0 bg-secondary rounded-5 overflow-hidden">
        <div className="content-text w-100 h-100 text-center d-grid align-content-center">
            <div className="col-12 col-md-8 col-lg-4 p-3 p-md-0 mx-auto">
                <h1 className="text-light m-0">
                    Welcome to Niset-Food The Heart of Khmer Cuisine!
                </h1>
                <p className="text-light m-0">
                    Experience the authentic taste of Cambodia. Let us serve you the
                    finest Khmer dishes made with love and tradition
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
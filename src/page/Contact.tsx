import { useEffect } from "react";

function Contact() {
  useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })
  return (
    <div
      style={{ paddingTop:"120px" }}
      className="bg-contact container-fluid d-flex justify-content-center align-items-center px-3 pb-5"
    >
      <div data-aos="fade-up" className="col-md-7 shadow-lg p-4 p-md-5 mt-3 bg-body rounded-3">
        <form action="">
          <div className="row m-0">
            <div className="col-md-6 border-3 pe-md-5">
              <h1 className="mb-3">Contact Us</h1>
              <label htmlFor="">Name</label>
              <input
                required
                type="text"
                name=""
                id=""
                className="form-control fs-4 mb-4 shadow-none border-0 border-bottom border-2 rounded-0 p-0 py-1"
                placeholder="Enter Name"
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                className="form-control fs-4 mb-4 shadow-none border-0 border-bottom border-2 rounded-0 p-0 py-1"
                placeholder="Enter Email"
              />
              <label htmlFor="">Password</label>
              <input
                required
                type="text"
                name=""
                id=""
                className="form-control fs-4 mb-4 shadow-none border-0 border-bottom border-2 rounded-0 p-0 py-1"
                placeholder="xxx xxx xxx"
              />
            </div>
            <div className="col-md-6 ps-md-3 mt-4 m-md-0">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                placeholder="Write text here..."
                className="form-control rounded-0 p-0 shadow-none fs-4 mt-2 rounded-2 p-3 border border-1"
                rows={4}
                style={{ resize: "none" }}
              ></textarea>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-success rounded-0 px-4 rounded-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

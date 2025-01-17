const Direction:React.FC = () => {
  return (
    <div className="mt-5 mt-lg-3 text-center px-4  pt-3">
      <h1 className=" m-0 text-success ">Direction.</h1>
      <p className=" fs-5 text-secondary mx-auto">
        Find our restaurant at the heart of Royal Phnom Penh. We are located in
        a central and easily accessible area, surrounded by vibrant city life.
      </p>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.878256276792!2d104.88109184959511!3d11.571950358046104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1733717019513!5m2!1sen!2skh"
          className="w-100 rounded-5 pb-3"
          height="350"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Direction;

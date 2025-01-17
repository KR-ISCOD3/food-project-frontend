import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <>
            <div className="container-fluid p-0 pb-5 pb-md-5 py-xl-4 mb-4 mb-xl-0 bg-green ">
                {/* --------- Footer-Content --------- */}
                <div className="container py-4 px-xl-5">
                    <div className="row m-0 px-xl-5">
                        <div className="col-md-6 d-flex text-light">    
                            <div className="col-6">
                                <NavLink to={"/#"} className="navbar-brand d-flex align-items-center col-md-6 col-lg-4">
                                    <img src="logo.png" alt="" width={40} />
                                    <span className="font-logo fs-3">
                                        NisetFood
                                    </span>
                                </NavLink>
                                <ul className="p-0 ps-1 mt-1">
                                    <li className="nav align-items-center">
                                        <IoMail className="me-2"/>
                                        info@gmail.com
                                    </li>
                                    <li className="nav align-items-center">
                                        <FaPhone className="me-2"/>
                                        10 923 231
                                    </li>
                                    <li className="nav align-items-center">
                                        <IoLocation  className="me-2"/>
                                        Royal Phnom Penh.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 px-3">
                                <h2 className="fw-bold">Our Menu</h2>
                                <ul className="p-0 ps-1">
                                    <li className="nav align-items-center">
                                        Khmer Food
                                    </li>
                                    <li className="nav align-items-center">
                                        Drink 
                                    </li>
                                    <li className="nav align-items-center"> 
                                        Dissert
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex text-light">
                            <div className="col-6 ">
                                <h2 className="fw-bold">Meal Categories</h2>
                                <ul className="p-0 ps-1 ">
                                    <li className="nav align-items-center">
                                        <NavLink to={"#"} className="text-light text-decoration-none"> 
                                            Breakfast: First Meal of the Day
                                        </NavLink>
                                    </li>
                                    <li className="nav align-items-center">
                                        <NavLink to={"#"} className="text-light text-decoration-none">
                                            Lunch: Midday Meal
                                        </NavLink>
                                    </li>
                                    <li className="nav align-items-center"> 
                                        <NavLink to={"#"} className="text-light text-decoration-none">
                                            Dinner: Evening Meal 
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 px-3">
                                <h2 className="fw-bold">Socail Media</h2>
                                <ul className="p-0 ps-1">
                                    <NavLink to={"#"} className="text-light text-decoration-none">
                                        <li className="nav align-items-center">
                                            <FaFacebook className="me-2" />
                                            Facebook
                                        </li>
                                    </NavLink>
                                    <NavLink to={"#"} className="text-light text-decoration-none">
                                        <li className="nav align-items-center">
                                            <RiInstagramFill  className="me-2" />
                                            Instagram
                                        </li>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------- Copy-Right -------- */}
                <div className="container border-top text-center py-3 d-none d-xl-block">
                    <p className="m-0 text-light">@Copyrigth 2024 Powered by កវីអាយធី</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
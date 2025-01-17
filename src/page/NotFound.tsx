import { NavLink } from "react-router-dom";


const NotFound = () => {
    return(
        <div className="container-fluid pt-4 pb-5 p-0" >
            <div className="col-12 col-md-6 mx-auto pt-5">
                <div style={{height:400}} className="w-100">
                    <img src="image/gif-404.gif" alt="" className="w-100 h-100 object-fit-cover"/>
                </div>
            </div>
            <div className="text-center">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for does not exist.</p>
                <NavLink to={"/"} className="btn bg-green text-light">
                    Go Home
                </NavLink>
            </div>
        </div> 
    )

}
export default NotFound;
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {

    const {openSignIn} = useClerk()
    const {user} = useUser()
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Contenedor del logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Imagen del logo */}
          <img src={assets.favicon} alt="Logo" className="w-8 h-8" />
          {/* Título del logo */}
          <h1 className="text-xl font-semibold flex items-center">
            Jobs <span className="font-bold">Portugal</span>
          </h1>
        </div>
        {
            user
            ?<div className="flex items gap-3">
                <Link to={'/aplications'}>Applied Jobs</Link>
                <p>|</p>
                <p>Hi,{user.firstName+" "+user.lastName} </p>
                <UserButton />
            </div>
            :  
            <div className="flex gap-4 max-sm:text-xs">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-2xl cursor-pointer">Recruiter Login</button>
              <button onClick={() => openSignIn()} className="bg-blue-500 text-white px-9 py-2 rounded-2xl cursor-pointer">Login</button>
            </div>
        }
        
        </div>
    </div>
  );
}

export default Navbar;
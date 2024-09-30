import { TfiMenu } from "react-icons/tfi";

const Navbar = () =>{
    return(
        <div className="flex flex-row w-full px-4 lg:px-8 py-10 lg:py-8 h-20 bg-blue-700/[0.8] fixed items-center justify-between z-[100]">
            <button className="text-5xl text-blue-50 transition-all duration-100 hover:scale-110 active:text-blue-500"><TfiMenu/></button>
            <p>Website Dashboard</p>


        </div>
    )
}

export default Navbar;
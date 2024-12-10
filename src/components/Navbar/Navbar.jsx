import { AlignJustify, X } from "lucide-react";
import logo from "../../assets/assignment-images/imges/nav/logo.png";
import {useState } from "react";
// import Style from "./Navbar.module.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav id="navBar" className={`fixed top-0 bg-gray-900 lg:bg-transparent left-0 right-0 z-40 flex justify-between items-center px-10 py-5 text-lg ${isOpen && 'flex-col gap-y-5 text-white relative'}`}>
            <span><img src={logo} className="w-full" alt="rentcars"/></span>
            <ul className={` lg:flex justify-evenly text-center gap-7 text-gray-500 ${isOpen ? "flex-col" : "hidden" }`}>
                <li className={`lg:hover:text-black duration-300 cursor-pointer ${isOpen && "hover:text-white my-2" }`}>Become a rintal</li>
                <li className={`lg:hover:text-black duration-300 cursor-pointer ${isOpen && "hover:text-white my-2" }`}>Rinatal deals</li>
                <li className={`lg:hover:text-black duration-300 cursor-pointer ${isOpen && "hover:text-white my-2" }`}>How it work</li>
                <li className={`lg:hover:text-black duration-300 cursor-pointer ${isOpen && "hover:text-white my-2" }`}>Why choose us</li>
            </ul>
            <ul className={`lg:flex justify-evenly text-center gap-4 items-center ${isOpen ? "flex-col space-y-3" : "hidden" }`}>
                <li>
                    <button>Sign in</button>
                </li>
                <li>
                    <button className="bg-blue-600 py-1 rounded-md px-3 text-white">Sign Up</button>
                </li>
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className="absolute top-4 right-4 lg:hidden text-gray-500 py-1 px-3 rounded-md border-2 border-gray-500">{isOpen ? <X size={24} /> : <AlignJustify size={24} />}</button>
        </nav>
    )
}

export default Navbar

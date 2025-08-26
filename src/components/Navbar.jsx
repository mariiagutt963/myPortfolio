import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(()=> {
        document.body.style.overflow = menuOpen? "hidden" : "";
    },[menuOpen]);

    return (
    <nav className="fixed top-0 left-0 w-full z-40 bg--50 backdrop-blur-lg shadow-[0_2px_5px_rgba(255,255,0,0.5)]">
    <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center h-16">
            <a href="#home" className=" text-xl font-medium text-orange-500"> 
            {" "}
        MARIA'S <br></br>PORTFOLIO
            </a>

            <div className="w-16 h-6 relative cursor-pointer z-40 md:hidden text-2xl text-gray-400 hover:text-orange-400 transition-colors" onClick={()=> setMenuOpen((prev)=>!prev)}>
                &#9776;
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors"> 
                    {" "}
                    Home
                    {" "} </a>

                    <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors"> 
                    {" "}
                    About
                    {" "} </a>

                    <a href="#projects" className="text-gray-400 hover:text-orange-400 transition-colors">  
                    {" "}
                    Projects
                    {" "} </a>

                    <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors"> 
                    {" "}
                    Contact
                    {" "} </a>
            </div>

        </div>
    </div>
    </nav>
    );
};
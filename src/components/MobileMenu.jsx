export const MobileMenu = ({menuOpen, setMenuOpen}) => {

  return (
    <div 
    className={`fixed top-0 left-0 w-full bg-[rgba(255,251,235,0.97)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
            menuOpen 
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none" 
        }
        `}
        >
            <button onClick={()=> setMenuOpen(false)} className="absolute top-6 right-6 text-gray-400 text-3xl focus:outline-none cursor-pointer hover:text-orange-400 transition-colors"
                aria-label="Menu close">
                &times;
            </button>

            <a href="#home" 
                    onClick={()=>setMenuOpen(false)}
                    className={`font-semibold text-gray-400 text-2xl my-4 transform transition-transform duration-300 hover:text-orange-400 transition-colors
                    ${
                        menuOpen
                        ?"opacity-100 translate-y-0"
                        :"opacity-0 translate-y-5"
                        }
                        `}
                        > 
                    Home
                    </a>

                    <a href="#about" 
                    onClick={()=>setMenuOpen(false)}
                    className={`font-semibold text-gray-400 text-2xl my-4 transform transition-transform duration-300 hover:text-orange-400 transition-colors
                    ${
                        menuOpen
                        ?"opacity-100 translate-y-0"
                        :"opacity-0 translate-y-5"
                        }
                        `}
                        > 
                    About
                      </a>

                    <a href="#projects" 
                    onClick={()=>setMenuOpen(false)}
                     className={`font-semibold text-gray-400 text-2xl my-4 transform transition-transform duration-300 hover:text-orange-400 transition-colors
                    ${
                        menuOpen
                        ?"opacity-100 translate-y-0"
                        :"opacity-0 translate-y-5"
                        }
                        `}
                        > 
                    Projects
                     </a>

                    <a href="#contact" 
                    onClick={()=>setMenuOpen(false)}
                     className={`font-semibold text-gray-400 text-2xl my-4 transform transition-transform duration-300 hover:text-orange-400 transition-colors
                    ${
                        menuOpen
                        ?"opacity-100 translate-y-0"
                        :"opacity-0 translate-y-5"
                        }
                        `}
                        > 
                   Contact
                     </a>
                     </div>
    
    );
};
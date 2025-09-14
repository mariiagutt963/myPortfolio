import { FaEnvelope, FaPhoneSquareAlt, FaBehanceSquare, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-slate-50 backdrop-blur-lg shadow-[0_-4px_6px_rgba(255,255,0,0.5)]">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12 px-4 sm:px-8">
        <div className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
          <FaEnvelope />
          <span className="break-all sm:break-normal">mar.guttenova@gmail.com</span>
        </div>
        
        <div className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
          <FaPhoneSquareAlt />
          <span>+421 910 578 963</span>
        </div>

 <div className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
          <FaGithubSquare />
          <a
            href="https://github.com/mariiagutt963"
            target="_blank"
            rel="noopener noreferrer"
          >
            mariiagutt963
          </a>
        </div>
        
        
        <div className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm sm:text-base">
          <FaBehanceSquare />
          <a
            href="https://www.behance.net/mriaguttenov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mária Guttenová
          </a>
        </div>
      </div>
    </footer>
  );
};
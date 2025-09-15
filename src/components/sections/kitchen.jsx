import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";
import imgKit from '../../assets/images/kitH.jpg';
import imgKit1 from '../../assets/images/smf0.jpg';
import imgKit2 from '../../assets/images/smf1.jpg';
import imgKit3 from '../../assets/images/smf3.jpg';
import imgKit4 from '../../assets/images/modern1.jpg';
import imgKit5 from '../../assets/images/modern2.jpg';
import imgKit6 from '../../assets/images/lmf.jpg';
import FullWidthImageCarousel from "./FullWidthImageCarousel";
import { ChevronLeft } from 'lucide-react';


export const Kitchen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const kitchenImages = [imgKit1, imgKit2, imgKit3, imgKit4, imgKit5, imgKit6];
    
    return (
        <section 
            id="kitchen" 
            className="w-full">
            
            {/* Title */}z
            <h1 className="font-bold text-3xl sm:text-5xl md:text-8xl mt-14 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mt-34">
                Kitchen studio website
            </h1>

            {/* Hero section */}
            <div className="max-w-5xl mx-auto px-4 mb-8">
                <img
                    src={imgKit}
                    alt="kitchen Hero"
                    className="w-full max-h-[400px] md:max-h-[700px] object-cover rounded-lg"
                />
            </div>

            {/* Text Block - Above carousel on mobile */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="rounded p-6">
                    <p className="text-gray-400 text-justify leading-relaxed text-sm md:text-base">
                        As part of a UX/UI course, I designed a mobile interface for a kitchen studio website using Figma. The project began with user research, including an interview with the client to identify their needs, uncover pain points, and define research questions. 
                        <br /><br />
                        My goal was, based on the data collected from user interviews, to create clear navigation for the website, a well-organized structure for the mobile interface, and a pleasant yet neutral design. I aimed to avoid relying on trendy elements and instead focused on achieving simplicity in its use.</p>
                </div>
            </div>

            {/* Full Width Carousel */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8">
                <FullWidthImageCarousel images={kitchenImages} />
            </div>

            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center">
                    <a 
                        href="#projects"
                        className="inline-flex items-center gap-2 border border-orange-400 bg-slate-50 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >
                        <ChevronLeft size={20} />
                        <span>Back</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
import ImageCarousel from './imageCarousel';
import imgLMR from '../../assets/images/dvoj.jpg';
import imgLMR1 from '../../assets/images/dvoj1.jpg';
import imgLMR2 from '../../assets/images/dvoj2.jpg';
import imgLMR3 from '../../assets/images/dvoj3.jpg';
import imgLMR4 from '../../assets/images/dvoj4.jpg';
import imgLMR5 from '../../assets/images/dvoj5.jpg';
import { ChevronLeft } from 'lucide-react';



export const VisualIdentity = () => {
const lemraImages = [imgLMR1, imgLMR2, imgLMR3, imgLMR4, imgLMR5];

    return (
       <section 
         id="visualIdentity" 
         className="w-full">

      <h1 className="font-bold text-8xl mt-14 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mt-34">
      Visual Identity of Lemra
      </h1>

       {/*hero section*/}
             <div className="max-w-5xl mx-auto px-4">
              <img
                src={imgLMR}
                alt="Lemra Hero"
                className="w-full max-h-[700px] object-cover rounded-lg shadow-lg"
              />
            </div>

             {/* Main Content */}
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Carousel */}
          <ImageCarousel images={lemraImages} />

          {/* Text Block */}
          <div className="flex items-center justify-center">
            <div className="rounded p-6 hover:-translate-y-1 transition-all max-w-xl">
              <p className="text-gray-400 text-justify leading-relaxed">
                A project showcasing selected elements of a visual identity created for a fictional low-cost student accommodation service. The goal was to evoke a sense of visual punk and friendly chaos by combining hand-drawn elements with digital post-production. This stylistic approach was meant to reflect the atmosphere of affordable, no-frills lodging designed for easygoing, budget-conscious travelers. </p>
           <div className="text-left sm:text-right mt-18">
  <a 
    href="#projects"
    className="inline-flex items-center gap-2 border border-orange-400 bg-slate-50 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
  >
    <ChevronLeft size={20} />
    <span>Back</span>
  </a>
</div>
           
           
            </div>
          </div>
        </div>

       
      </div>
       
       </section>
    );
};
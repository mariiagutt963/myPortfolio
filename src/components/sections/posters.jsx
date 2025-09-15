import ImageCarousel from './imageCarousel';
import { useEffect } from 'react';
import img1xp from '../../assets/images/1xp.jpg';
import img2xp from '../../assets/images/2xp.jpg';
import imgaxp from '../../assets/images/axp.jpg';
import imgbxp from '../../assets/images/bxp.jpg';
import imgHeroP from '../../assets/images/heroxp.jpg';

import info2xp from '../../assets/images/info2.jpg';
import info3xp from '../../assets/images/info3.jpg';
import info4xp from '../../assets/images/info4.jpg';
import info5xp from '../../assets/images/info5.jpg';
import info6xp from '../../assets/images/info6.jpg';
import imgHeroInfo from '../../assets/images/info1.jpg';
import { ChevronLeft } from 'lucide-react';

export const Posters = () => {

   useEffect(() => {
           window.scrollTo(0, 0);
       }, []);

      const postersImages = [imgaxp, img1xp, img2xp,imgbxp];
      const posterInfograph = [info4xp,info6xp,info5xp,info3xp,info2xp]

       return (
       <section className="w-full">  
        <h1 className="font-bold text-3xl sm:text-5xl md:text-8xl mt-14 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mt-34">
       Typo posters
      </h1>
      {/* hero section*/}
             <div className="max-w-5xl mx-auto px-4">
              <img
                src={imgHeroP}
                alt="Magazin Hero"
                className="w-full max-h-[700px] object-cover rounded-lg"
              />
            </div>

            {/* Main Content */}
     <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Carousel */}
          <ImageCarousel images={postersImages} />

          {/* Text Block */}
            <div className="flex items-center justify-center">
              <div className="rounded p-6 hover:-translate-y-1 transition-all max-w-xl">
              <p className="text-gray-400 text-justify leading-relaxed">
                 Slightly irreverent typographic poster that visually illustrates the process of gaining weight — starting with an exaggerated appetite and gradually morphing into the physical consequences. 
                 <br /><br />The concept is expressed purely through the transformation of typography, capturing the progression in a playful and graphic way. </p>
                </div>
              </div>
          </div>
      </div>

      <div className="w-full ">
         <h1 className="font-bold text-3xl sm:text-5xl md:text-8xl mt-14 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mt-34">
        Infographic poster
        </h1>

        <div className="max-w-5xl mx-auto px-4">
              <img
                src={imgHeroInfo}
                alt="Magazin Hero"
                className="w-full max-h-[700px] object-cover rounded-lg"
              />
            </div>

            {/* Main Content */}
     <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Carousel */}
          <ImageCarousel images={posterInfograph} />

          {/* Text Block */}
            <div className="flex items-center justify-center">
              <div className="rounded p-6 hover:-translate-y-1 transition-all max-w-xl">
              <p className="text-gray-400 text-justify leading-relaxed">
                An infographic that maps out the fictional employment of graduates from AKU BB on the job market after completing their masters degree in selected years. I worked with the concept of a marketplace as a metaphor for the labor market — depicted through various stalls representing professional fields, with the number of people at each stall indicating the number of graduates working in those areas.
The poster included a legend that was organized according to the colors or patterns of the individual stalls.<br /><br /> Looking back, I would definitely revise the concept, as it lacks immediate clarity and readability. However, I still enjoy the visual aspect of this piece.  
</p>

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

</div>
</section>

      
    );
};
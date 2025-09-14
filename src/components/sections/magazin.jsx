import ImageCarousel from './imageCarousel';
import img1 from '../../assets/images/1x5.jpg';
import img2 from '../../assets/images/2x5.jpg';
import img3 from '../../assets/images/3x5.jpg';
import img4 from '../../assets/images/4x5.jpg';
import img5 from '../../assets/images/5x5.jpg';


import img7 from '../../assets/images/7x5.jpg';
import heroImg from '../../assets/images/6x5.jpg';

import { ChevronLeft } from 'lucide-react';

export const Magazin = () => {
  const magazinImages = [img1, img2, img3, img4, img5, img7];

  return (
    <section className="w-full">
     
      <h1 className="font-bold text-8xl mt-14 mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mt-34">
        Magazin 5
      </h1>

      {/* hero section*/}
       <div className="max-w-5xl mx-auto px-4">
        <img
          src={heroImg}
          alt="Magazin Hero"
          className="w-full max-h-[700px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Carousel */}
          <ImageCarousel images={magazinImages} />

          {/* Text Block */}
          <div className="flex items-center justify-center">
 <div className="rounded p-6 hover:-translate-y-1 transition-all max-w-xl">
  <p className="text-gray-400 text-left leading-relaxed">
    The main concept behind this project was to work with three visual effects — layering, sharp geometric edges, and the effect of screen printing. The latter was intended to contrast with the hardness and inorganic nature of the first two. We also aimed to apply these effects functionally, for example in elements such as internal content structure, chapter marking, and similar components. Since this was a literary magazine, we wanted to preserve a sense of artistic character.
    <br /><br />
    We tried to achieve that through a muted, narrow color palette as well as by using a relatively simple compositional structure with dominant elements of black-and-white screen-printed photography. We also created a distinct vintage aesthetic.
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
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";
import imgMe from '../../assets/images/me.jpg';


export const Home = () => {
    return (
        <section 
   id="home"
  className="min-h-screen flex items-center justify-center relative px-6"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-28">
             
    <div className="w-full flex flex-col items-center ">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent leading-tight text-center">
    Hi, I'm Maria.
  </h1>
 
    <p className="text-gray-400 mb-8 text-lg text-left max-w-lg">
    I'm a self-taught frontend developer in the making. Right now I'm building on my HTML and CSS skills while learning JavaScript and React. I love designing user-friendly, simple, and enjoyable web experiences. Outside of coding, you'll probably find me with a cup of coffee, taking care of my plants, working out, reading a good book, or having a great conversation. I'm always striving to learn and grow—both in tech and in life.
  </p>
 
    <div className="flex flex-col sm:flex-row justify-center w-full gap-4 sm:gap-x-6">
    <a
       href="#projects"
       className="bg-orange-400 text-white py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)] text-center"
    >
      View projects
    </a>
    <a
       href="#contact"
       className="border border-orange-400 text-orange-400 py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)] text-center"
    >
      Contacts
    </a>
  </div>
</div>
            
    <div className="w-full flex justify-center">
      <img
        src={imgMe}
        alt="ME"
        className="rounded-lg border-4 border-orange-400 object-cover max-h-[600px] w-full md:w-auto"
      />
    </div>
  </div>
</section>
     
    );
};
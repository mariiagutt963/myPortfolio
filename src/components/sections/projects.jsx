import { Link } from 'react-router-dom';
import { RevealOnScroll } from "../RevealOnScroll";
import imgA from '../../assets/images/6x5.jpg';
import imgB from '../../assets/images/info1.jpg';
import imgC from '../../assets/images/dvoj.jpg';
import imgD from '../../assets/images/kit1.jpg';
import imgF from '../../assets/images/itds.jpg';
import imgG from '../../assets/images/hada.jpg';



export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 p-8">
             
              <RevealOnScroll>
            <div className="mx-auto px-4 max-w-5xl pt-16">
                <h2 className="font-bold text-3xl sm:text-5xl md:text-7xl mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center"
                
                > Graphic Design Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <Link to="/Magazin" className="text-orange-400 mb-4 p-4 border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition cursor-pointer block">
                    {/* Image with title */}
                    <div className="max-w-5xl mx-auto ">
                      <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                            Magazin 5
                        </h3>
                        <img
                            src={imgA}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />
                        
                    </div>
                    
                    {/* Description box */}
                    <div className="mt-6 bg-transparent">
                        <p className="text-gray-400 text-md"> 
                            Literature magazin with a distinct vintage aesthetic.
                        </p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </Link>


                 <Link to="/posters" className="text-orange-400 mb-4 p-4 border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition cursor-pointer block">
                    {/* Image with title */}
                    <div className="max-w-5xl mx-auto ">
                      <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                            Posters
                        </h3>
                        <img
                            src={imgB}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />
                        
                    </div>
                    
                    {/* Description box */}
                    <div className="mt-6 bg-transparent">
                        <p className="text-gray-400 text-md"> Samples of my poster designs.
                        </p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <Link to="/visualIdentity" className="text-orange-400 mb-4 p-4 border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition cursor-pointer block">
                  
                    <div className="max-w-5xl mx-auto ">
                      <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                            Visual identity of Lemra
                        </h3>
                        <img
                            src={imgC}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />
                        
                    </div>
                    
                    {/* Description box */}
                    <div className="mt-6 bg-transparent">
                        <p className="text-gray-400 text-md"> 
                            Selected examples of visual identity.
                        </p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </Link>


                 <Link to="/kitchen" className="text-orange-400 mb-4 p-4 border-4 border-orange-400 rounded-xl hover:-translate-y-1  hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition cursor-pointer block">
                    {/* Image with title */}
                    <div className="max-w-5xl mx-auto ">
                      <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                            Kitchen studio website
                        </h3>
                        <img
                            src={imgD}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />
                        
                    </div>
                    
                    {/* Description box */}
                    <div className="mt-6 bg-transparent">
                        <p className="text-gray-400 text-md"> A mobile interface for a kitchen studio website. 
                        </p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
              </div>

             
               
<h2 className="mt-20 font-bold text-3xl sm:text-5xl md:text-7xl mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center"
                
                > Frontend projects
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
<div 
onClick={() => window.open('https://mariiagutt963.github.io/first_to_do_app/', '_blank')}
className="cursor-pointer text-orange-400 mb-4 hover:-translate-y-1 transition duration-300 bg-slate-50 rounded-xl border-4 border-orange-400 p-6 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
>
<div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                           It is done!
                        </h3>

                         <img
                            src={imgF}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />

                    <p className="text-gray-400 mt-8">
                                A simple, scallable to do app that contains a place for writing tasks, a button for adding them to the task list, a button for marking tasks as done, and a bin button for removing items. 
                    </p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["HTML","CSS","JavaScript"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>

                                ))
                                }
</div>
</div>
</div>


<div 
onClick={() => window.open('https://mariiagutt963.github.io/hadik/', '_blank')}
className="cursor-pointer text-orange-400 mb-4 hover:-translate-y-1 transition duration-300 bg-slate-50 rounded-xl border-4 border-orange-400 p-6 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
>
<div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className="text-center hover:underline hover:transition-all text-orange-400 text-3xl rounded-full font-bold mb-4 duration-100">
                          Snake
                        </h3>

                         <img
                            src={imgG}
                            alt="Magazin Hero"
                            className="w-full max-h-[700px] object-cover rounded-lg opacity-70 hover:opacity-100"
                        />

                    <p className="text-gray-400 mt-8">
                    A voluntary assignment as part of the JavaScript course from Skillmea, I followed the tutorial but I subsequently changed some elements according to my preferences.</p>
                        <hr className="border-3 rounded-full border-orange-400 my-4 mx-8" />
                        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 overflow-x-auto">
                            {["HTML","CSS","JavaScript"].map((tech,key)=>(
                                <span 
                                    key={key}
                                    className="text-gray-400 py-1 px-3 text-sm">
                                    {tech}
                                </span>

                                ))
                                }
</div>
</div>
</div>




                    


</div>

          
</div>

            


              </RevealOnScroll>
        </section>
    
    )
    };
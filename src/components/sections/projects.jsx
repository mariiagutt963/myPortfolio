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
            className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:py-20 sm:px-8"
        >
            <RevealOnScroll>
                <div className="w-full max-w-5xl mx-auto pt-8 sm:pt-16">
                    <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center px-2">
                        Graphic Design Projects
                    </h2>

                    {/* First row - Graphic Design Projects */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
                        <Link 
                            to="/Magazin" 
                            className="w-full text-orange-400 p-3 sm:p-4 border-2 sm:border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition-all duration-300 cursor-pointer block"
                        >
                            <div className="w-full">
                                <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                    Magazin 5
                                </h3>
                                <div className="w-full overflow-hidden rounded-lg">
                                    <img
                                        src={imgA}
                                        alt="Magazin Hero"
                                        className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4 sm:mt-6">
                                <p className="text-gray-400 text-sm sm:text-md px-2"> 
                                    Literature magazin with a distinct vintage aesthetic.
                                </p>
                                <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                                <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                    {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>

                        <Link 
                            to="/posters" 
                            className="w-full text-orange-400 p-3 sm:p-4 border-2 sm:border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition-all duration-300 cursor-pointer block"
                        >
                            <div className="w-full">
                                <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                    Posters
                                </h3>
                                <div className="w-full overflow-hidden rounded-lg">
                                    <img
                                        src={imgB}
                                        alt="Posters"
                                        className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4 sm:mt-6">
                                <p className="text-gray-400 text-sm sm:text-md px-2">
                                    Samples of my poster designs.
                                </p>
                                <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                                <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                    {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Second row - Graphic Design Projects */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">
                        <Link 
                            to="/visualIdentity" 
                            className="w-full text-orange-400 p-3 sm:p-4 border-2 sm:border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition-all duration-300 cursor-pointer block"
                        >
                            <div className="w-full">
                                <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                    Visual identity of Lemra
                                </h3>
                                <div className="w-full overflow-hidden rounded-lg">
                                    <img
                                        src={imgC}
                                        alt="Visual Identity"
                                        className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4 sm:mt-6">
                                <p className="text-gray-400 text-sm sm:text-md px-2"> 
                                    Selected examples of visual identity.
                                </p>
                                <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                                <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                    {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>

                        <Link 
                            to="/kitchen" 
                            className="w-full text-orange-400 p-3 sm:p-4 border-2 sm:border-4 border-orange-400 rounded-xl hover:-translate-y-1 hover:shadow-[0_5px_8px_rgba(255,255,0,0.7)] transition-all duration-300 cursor-pointer block"
                        >
                            <div className="w-full">
                                <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                    Kitchen studio website
                                </h3>
                                <div className="w-full overflow-hidden rounded-lg">
                                    <img
                                        src={imgD}
                                        alt="Kitchen Studio"
                                        className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-4 sm:mt-6">
                                <p className="text-gray-400 text-sm sm:text-md px-2">
                                    A mobile interface for a kitchen studio website.
                                </p>
                                <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                                <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                    {["Adobe Photoshop","Adobe InDesign","Adobe Ilustrator"].map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Frontend Projects Section */}
                    <h2 className="mt-12 sm:mt-20 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center px-2">
                        Frontend projects
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
                        <div 
                            onClick={() => window.open('https://mariiagutt963.github.io/first_to_do_app/', '_blank')}
                            className="w-full cursor-pointer text-orange-400 hover:-translate-y-1 transition-all duration-300 bg-slate-50 rounded-xl border-2 sm:border-4 border-orange-400 p-4 sm:p-6 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        >
                            <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                It is done!
                            </h3>

                            <div className="w-full overflow-hidden rounded-lg">
                                <img
                                    src={imgF}
                                    alt="Todo App"
                                    className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                            <p className="text-gray-400 mt-4 sm:mt-8 text-sm sm:text-base px-2">
                                A simple, scallable to do app that contains a place for writing tasks, a button for adding them to the task list, a button for marking tasks as done, and a bin button for removing items. 
                            </p>
                            <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                            <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                {["HTML","CSS","JavaScript"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div 
                            onClick={() => window.open('https://mariiagutt963.github.io/hadik/', '_blank')}
                            className="w-full cursor-pointer text-orange-400 hover:-translate-y-1 transition-all duration-300 bg-slate-50 rounded-xl border-2 sm:border-4 border-orange-400 p-4 sm:p-6 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        >
                            <h3 className="text-center hover:underline text-orange-400 text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-100">
                                Snake
                            </h3>

                            <div className="w-full overflow-hidden rounded-lg">
                                <img
                                    src={imgG}
                                    alt="Snake Game"
                                    className="w-full h-48 sm:h-64 lg:h-80 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>

                            <p className="text-gray-400 mt-4 sm:mt-8 text-sm sm:text-base px-2">
                                A voluntary assignment as part of the JavaScript course from Skillmea, I followed the tutorial but I subsequently changed some elements according to my preferences.
                            </p>
                            <hr className="border-2 sm:border-3 rounded-full border-orange-400 my-3 sm:my-4 mx-4 sm:mx-8" />
                            <div className="flex flex-wrap gap-1 items-center justify-center mt-3 sm:mt-4">
                                {["HTML","CSS","JavaScript"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="text-gray-400 py-1 px-2 sm:px-3 text-xs sm:text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
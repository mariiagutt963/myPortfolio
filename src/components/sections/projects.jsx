import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 p-8">
             
              <RevealOnScroll>
            <div className="mx-auto px-4 max-w-5xl">
                <h2 className="font-bold text-5xl mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center"
                
                >Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className=" font-medium text-2xl  rounded-xl border boder-orange-400">
                    It is Done!
                    </h3>
                    <p className="text-gray-400 mt-8">
                                A simple, scallable app that contains a place for writing tasks, a button for adding them to the task list, a button for marking tasks as done, and a bin button for removing items. 
                    </p>
                        <div className="flex flex-wrap gap-2 items-center justify-center mt-6">
                                {["HTML","CSS","Javascript"].map((tech,key)=>(
                               <span 
                                key={key}
                                
                                className=" border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>

                                ))
                                }
                     </div>

                     <a 
                        href="https://mariiagutt963.github.io/first_to_do_app/" 
                        className="mt-4 inline-block bg-slate-50 text-orange-400 rounded-full py-3 px-6 font-medium duration-100 hover:border border-orange-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >View project →
                    </a>
                     </div>
                    
                    <div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className=" font-medium text-2xl rounded-xl border boder-orange-400">
                    Snake
                    </h3>
                    <p className="text-gray-400 mt-6">
                                A voluntary assignment as part of the JavaScript course from Skillmea, I followed the tutorial but I subsequently changed some elements according to my preferences.</p>
                        <div className="flex flex-wrap gap-2 items-center justify-center mt-6">
                                {["HTML","CSS","Javascript"].map((tech,key)=>(
                               <span 
                                key={key}
                                
                                className=" border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                                ))}
                                
                        </div>

                      <a 
                        href="#" 
                        className="mt-4 inline-block bg-slate-50 text-orange-400 rounded-full py-3 px-6 font-medium
                         duration-100 hover:border border-orange-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >View project →
                    </a>
                        </div>

                </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                <div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className="font-medium text-2xl  rounded-xl border boder-orange-400">
                    Grafika v pohybe
                    </h3>
                    <p className="text-gray-400 mt-6">
                      A website in the making for a wonderful project by the civic association Art in Motion, which organizes an art workshop for children from orphanages and excluded social groups. I am extremely proud that they approached me and that I was able to create a website for them.</p>
                        <div className="flex flex-wrap gap-2 items-center justify-center mt-6">
                                {["React","Tailwind","Node.js"].map((tech,key)=>(
                               <span 
                                key={key}
                                
                                className=" border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>

                                ))
                                }
                        </div>
                        <a 
                        href="#" 
                        className="mt-4 inline-block bg-slate-50 text-orange-400 rounded-full py-3 px-6 font-medium transition-all duration-100 hover:border border-orange-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >View project →
                    </a>
                        </div>

                    <div className="text-orange-400 mb-4 hover:-translate-y-1 transition">
                    <h3 className="font-medium text-2xl  rounded-xl border boder-orange-400">
                   Art school website
                    </h3>
                    <p className="text-gray-400 mt-6">
                              I am creating a website for the school where I worked as a teacher. My main goal is to make the website more up-to-date, clearer, and more user-friendly, but at the same time retain the charm of the institution for which it was created.  
                                </p>
                        <div className="flex flex-wrap gap-2 items-center justify-center mt-6">
                                {["React","Tailwind","Node.js"].map((tech,key)=>(
                               <span 
                                key={key}
                                
                                className=" border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>

                                ))
                                }
                        </div>
                        <a 
                        href="#" 
                        className="mt-4 inline-block bg-slate-50 text-orange-400 rounded-full py-3 px-6 font-medium transition-all duration-100 hover:border border-orange-400 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >View project →
                    </a>
                        </div>

                        
            
            
            </div>

            

            </div>

              </RevealOnScroll>
        </section>
    
    )
    };
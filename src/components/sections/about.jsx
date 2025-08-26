import { RevealOnScroll } from "../RevealOnScroll";
export const About = ()=> {

    const frontEndSkills = ["HTML",
        "CSS",
        "TailwindCSS",
        "React"
        ];

    const designSkills = ["Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Figma"
       ];

    return <section id="about" className="min-h-screen flex item-center justify-center py=20 pt-22">

         <RevealOnScroll>

        <div className="mx-auto px-4 max-w-3xl">
            <h2 className="font-bold text-5xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center"
                >About me
            </h2>

            <div className="rounded p-8 border-black/10 border/hover:-translate-y-1 transition-all" >
                <p className="mb-6 text-gray-400">
                    I’m a curious junior front-end developer with 
a love for typography and a soft spot for
illustrative elements. I gravitate toward web development and
design that speaks a human language
—clear, honest, and relatable.”
                </p>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="rounded-xl p-6 hover:">
                            <h3 className="text-xl text-orange-400 font-bold mb-4">
                            Frontend
                             </h3>
                         <div className="flex flex-col gap-2">
                            {frontEndSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                
                                className=" border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                            </div>
                         </div>

                         

                         <div className="rounded-xl p-6 hover:">
                            <h3 className="text-xl text-orange-400 font-bold mb-4">
                            Design
                             </h3>
                         <div className="flex flex-col gap-2">
                            {designSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                
                                className="border border-orange-400 bg-slate-50 text-gray-400 py-1 px-3 rounded-full text-sm ">
                                    {tech}
                                </span>
                            ))}
                            </div>
                         </div>
                </div>

            </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6">
                <h3 className="text-xl text-orange-400 font-bold mb-4">
                            Education
                </h3>
                <ul className="text-gray-400 text-center">
                    <li> <strong>Academy of Arts in Banská Bystrica</strong> </li>
                    <li>Bachelor in Printmaking</li>
                    <li>Master in Fine art</li>
                </ul>

                 <ul className="text-gray-400 text-center pt-4">
                    <li> <strong>Matej Bel University</strong> </li>
                    <li>Teaching qualification</li>
                
                </ul>

            </div>
                
                <div className="rounded-xl p-6">
                    <h3 className="text-xl text-orange-400 font-bold mb-4">
                            Certificate
                             </h3>

                             <ul className="text-gray-400 text-center">
                    <li> <strong>Software Development Academy</strong> </li>
                    <li>UX UI Design</li>
                     </ul>

                    <ul className="text-gray-400 text-center pt-4">
                    <li> <strong>Skillmea</strong> </li>
                    <li>JavaScript Academy</li>
                     <li >GitHub</li>
                    </ul>

                     <ul className="text-gray-400 text-center pt-4">
                    <li> <strong>Iuventa</strong> </li>
                    <li>Process management and strategic planning for non-governmental organizations</li>
                    </ul>



            </div>

        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-0">
                <div className="rounded-xl p-6">
                    <h3 className="text-xl text-orange-400 font-bold ">
                           Work experience
                    </h3>
                    <ul className="text-gray-400 text-center pt-4">
                    <li> <strong>Private Elementary Art School </strong> </li>
                    <li >Teaching Fine art</li>
                    </ul>
                </div>
                 <div className="rounded-xl p-6">
                    <h3 className="text-xl text-orange-400 font-bold ">
                           Prizes
                    </h3>
                    <ul className="text-gray-400 text-center pt-4 mt-4">
                    <li> <strong>Decanus Award</strong> </li>
                    <li>Awarded twice by Academy of Art in Banská Bystrica for bachelor's thesis and master's thesis</li>
                     <li className="mt-4"> <strong>Martin Benka Prize</strong> </li>
                    <li>Award for young artists and graduates of art universities for their contribution to Slovak art and culture</li>
                    
                    </ul>
                </div>

            </div>

        </div>
 </RevealOnScroll>
 </section>
}
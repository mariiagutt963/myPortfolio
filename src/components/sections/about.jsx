import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["HTML", "CSS", "TailwindCSS", "React"];
    const designSkills = ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma"];
    const softSkills = ["Adaptability", "Strenuousness", "Non-conflict", "Pedantry"];

    return (
        <section id="about" className="py-20 pt-30">
            <RevealOnScroll>
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="font-bold text-5xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center mb-12">
                        About me
                    </h2>

                    <div className="rounded hover:-translate-y-1 transition-all mb-12 ">
                        <p className="mb-6 text-slate-50 text-lg text-italic text-justify bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-10 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 animate-typing overflow-hidden ">
                            From teaching kids to paint their dreams to building digital experiences that capture hearts – my journey has always been about making the complex beautifully simple. I gravitate toward web development and design that speaks a human language — clear, honest and relatable. 
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="rounded-xl p-6 border-4 border-orange-400 mt-10">
                                <h3 className="text-xl text-orange-400 font-bold mb-6">
                                    Frontend
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {frontEndSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-3 rounded-full text-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 border-4 border-orange-400 mt-10">
                                <h3 className="text-xl text-orange-400 font-bold mb-6">
                                    Design
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {designSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-3 rounded-full text-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                             <div className="rounded-xl p-6 border-4 border-orange-400 mt-10">
                                <h3 className="text-xl text-orange-400 font-bold mb-6">
                                    Soft skills
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {softSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="text-gray-400 py-1 px-3 rounded-full text-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education, Certification, Work Experience, and Prizes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="rounded-xl p-6 ">
                            <h3 className="text-xl text-orange-400 font-bold mb-4 text-center">
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Academy of Arts in Banská Bystrica</div>
                                    <div className="text-sm">Bachelor in Printmaking</div>
                                    <div className="text-sm">Master in Fine art</div>
                                </div>
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Matej Bel University</div>
                                    <div className="text-sm">Teaching qualification</div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl text-orange-400 font-bold mb-4 text-center">
                                Certificate
                            </h3>
                            <div className="space-y-4">
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Software Development Academy</div>
                                    <div className="text-sm">UX UI Design</div>
                                </div>
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Skillmea</div>
                                    <div className="text-sm">JavaScript Academy</div>
                                    <div className="text-sm">GitHub</div>
                                </div>
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Iuventa</div>
                                    <div className="text-sm">Process management and strategic planning for non-governmental organizations</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl p-6">
                            <h3 className="text-xl text-orange-400 font-bold mb-4 text-center">
                                Work Experience
                            </h3>
                            <div className="space-y-4">
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Private Elementary Art School</div>
                                    <div className="text-sm">Teaching Fine art</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl text-orange-400 font-bold mb-4 text-center">
                                Prizes
                            </h3>
                            <div className="space-y-4">
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Decanus Award</div>
                                    <div className="text-sm">Awarded twice by Academy of Art in Banská Bystrica for bachelor's thesis and master's thesis</div>
                                </div>
                                <div className="text-gray-400 text-center">
                                    <div className="font-semibold">Martin Benka Prize</div>
                                    <div className="text-sm">Award for young artists and graduates of art universities for their contribution to Slovak art and culture</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >

            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Maria.
                </h1>
                <p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto text-justify">
                    I'm a self-taught frontend developer in the making. Right now I'm building on my HTML and CSS skills while learning JavaScript and React. I love designing user-friendly, simple, and enjoyable web experiences. Outside of coding, you'll probably find me with a cup of coffee, taking care of my plants, working out, reading a good book, or having a great conversation. I'm always striving to learn and grow—both in tech and in life.
                </p>
                <div className="flex justify-center gap-x-6">
                    <a 
                        href="#projects" 
                        className="bg-orange-400 text-white py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >
                        View projects
                    </a>

                    <a 
                        href="#contact" 
                        className="border border-orange-400 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                    >
                        Contacts
                    </a>
                </div>
            </div>
              </RevealOnScroll>
        </section>
    );
};
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFromData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID,
                e.target, 
                import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                alert("Message sent.");
                setFromData({ name: "", email: "", message: "" })
            })
            .catch(() => {
                alert("Ooops. Something went wrong. Please try again.")
            });
    }

    return (
        <section id="contact" className="py-16 md:py-20">
            <RevealOnScroll>
                <div className="px-4 w-full max-w-[800px] mx-auto">
                    <h2 className="font-bold text-5xl mb-8 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent text-center">
                        Get in touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full border border-orange-400 rounded px-4 py-3 text-gray-400 bg-transparent transition focus:outline-none focus:border-orange-500 focus:text-gray-400"
                                placeholder="Name" 
                                onChange={(e) => setFromData({
                                    ...formData, name: e.target.value
                                })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full border border-orange-400 rounded px-4 py-3 text-gray-400 bg-transparent transition focus:outline-none focus:border-orange-500 focus:text-gray-400"
                                placeholder="example@gmail.com" 
                                onChange={(e) => setFromData({
                                    ...formData, email: e.target.value
                                })}
                            />
                        </div>

                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                rows={5}
                                className="w-full border border-orange-400 rounded px-4 py-3 text-gray-400 bg-transparent transition focus:outline-none focus:border-orange-500 focus:text-gray-400"
                                placeholder="Your message..."
                                onChange={(e) => setFromData({
                                    ...formData, message: e.target.value
                                })} 
                            />
                        </div>
                        <button 
                            type="submit"  
                            className="bg-orange-400 text-white py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,0,0.7)]"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
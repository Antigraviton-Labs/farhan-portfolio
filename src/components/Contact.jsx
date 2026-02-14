import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/xeelgazq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">

                {/* CTA Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-4">Let's Connect</h2>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        Looking for a results-driven strategic partner who combines financial thinking with execution excellence? Let's talk.
                    </p>
                </div>

                {/* Main Card Container */}
                <div className="glass-card bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80 grid md:grid-cols-2 min-h-[500px] hover:shadow-3xl hover:border-slate-300/80 transition-colors duration-200">

                    {/* LEFT COLUMN: Contact Image */}
                    <div className="relative bg-gradient-to-br from-slate-50/50 to-slate-100/50 backdrop-blur-sm border-r border-slate-200/50 flex items-center justify-center p-8 overflow-hidden h-full order-last md:order-first group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/20 via-transparent to-slate-50/20 pointer-events-none" />
                        <img
                            src="/contactimage/contact.png"
                            alt="Contact illustration"
                            className="w-full h-full object-contain max-w-sm"
                            loading="lazy"
                        />
                    </div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 p-8 md:p-12 flex flex-col justify-center order-first md:order-last">
                        <h3 className="text-2xl md:text-3xl font-serif font-medium text-slate-900 mb-6">Send a Message</h3>

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <p className="text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <Input
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-colors duration-150 shadow-sm backdrop-blur-sm"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        required
                                        className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-colors duration-150 shadow-sm backdrop-blur-sm"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                                <Input
                                    name="subject"
                                    placeholder="How can I help?"
                                    required
                                    className="bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg h-10 rounded-lg text-slate-900 placeholder:text-slate-400 transition-all shadow-sm backdrop-blur-sm"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                                <Textarea
                                    name="message"
                                    placeholder="Your message..."
                                    className="min-h-[100px] bg-white/80 border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-400 focus:shadow-lg rounded-lg text-slate-900 placeholder:text-slate-400 resize-none transition-all shadow-sm p-3 backdrop-blur-sm"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-slate-900 text-white hover:bg-slate-800 py-2 h-10 text-sm font-medium rounded-lg shadow-md hover:shadow-xl transition-all active:scale-95 duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Footer Info Area */}
                <div className="flex justify-center gap-12 mt-12 text-center">
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.location.href = 'tel:+447587278863'}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                            <Phone className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">Phone</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">+44 7587278863</p>
                    </div>
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.location.href = 'mailto:farhanbagwann21@gmail.com'}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                            <Mail className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">Email</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">farhanbagwann21@gmail.com</p>
                    </div>
                    <div
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => window.open('https://www.linkedin.com/in/farhan-bagwan24', '_blank')}
                    >
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                            <Linkedin className="h-5 w-5" />
                        </div>
                        <p className="text-slate-800 text-sm font-medium group-hover:text-slate-900 transition-colors">LinkedIn</p>
                        <p className="text-slate-500 text-xs mt-1 group-hover:text-slate-600 transition-colors">/in/farhan-bagwan24</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;

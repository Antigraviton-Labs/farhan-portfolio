import React, { useState, useEffect } from "react";

const achievements = [
    {
        title: "Best Case Presentation",
        highlight: "Winner – 2025",
        description: "Delivered a performance management analysis covering 5 global automotive brands at MIM Conference.",
        imageSrc: "/achievements/warwick.png"
    },
    {
        title: "Sales & Trading Simulation",
        highlight: "Bank of America",
        description: "Analyzed equity markets and macroeconomic trends, executed trades in a live simulation with real-time risk management.",
        imageSrc: "/achievements/award.png"
    },
    {
        title: "GenAI Transformation",
        highlight: "Strategic Consulting",
        description: "Designed a GenAI-powered transformation strategy for a UK consultancy with full stakeholder approval.",
        imageSrc: "/achievements/revenue.png"
    },
    {
        title: "MSc Management",
        highlight: "Distinction",
        description: "Warwick Business School – Consulting Specialisation with modules in Digital Strategy, Data-Driven Decision Making & Corporate Finance.",
        imageSrc: "/achievements/conversion.png"
    },
];

const interests = [
    { title: "Business Strategy", icon: "📊" },
    { title: "Financial Services", icon: "💰" },
    { title: "Digital Transformation", icon: "🚀" },
    { title: "Process Optimisation", icon: "⚙️" },
];

const TherapeuticAreas = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <section className="py-24 bg-slate-50/30 border-y border-slate-100 overflow-hidden">
            {/* Achievements Section */}
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <h2 className="text-4xl font-serif font-medium text-slate-800">
                    Achievements & Highlights
                </h2>
                <p className="text-lg text-slate-500 font-light mt-4">
                    Key milestones and measurable impact across my journey.
                </p>
            </div>

            {/* Achievement Cards */}
            <div className="container mx-auto px-6 md:px-12 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 group cursor-default p-6 text-center"
                        >
                            <div className="text-4xl mb-4">{item.imageSrc ? "🏆" : "🎯"}</div>
                            <h3 className="text-lg font-serif text-slate-800 group-hover:text-slate-900 transition-colors mb-2">
                                {item.title}
                            </h3>
                            <p className="text-2xl font-bold text-blue-600 mb-2">{item.highlight}</p>
                            <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interests Section */}
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h3 className="text-2xl font-serif font-medium text-slate-800 mb-8">
                    Areas of Interest
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
                        >
                            <span className="text-xl">{interest.icon}</span>
                            <span className="text-slate-700 font-medium">{interest.title}</span>
                        </div>
                    ))}
                </div>
                <p className="text-slate-500 font-light mt-8 max-w-2xl mx-auto">
                    I enjoy working in environments where analytical rigour, cross-functional collaboration, and strategic creativity come together to create lasting impact.
                </p>
            </div>
        </section>
    );
};

export default TherapeuticAreas;

import React from "react";

const skills = [
    "Advanced Excel (VBA, Pivot Tables)",
    "SQL",
    "Power BI",
    "Financial & Business Data Analysis",
    "Microsoft Office Suite",
    "Business & Growth Strategy",
    "Stakeholder Management",
    "Project & Product Implementation",
    "Risk & Controls Awareness",
    "Financial Performance Analysis",
    "Process Optimisation & Automation",
    "Regulatory Compliance",
    "English – Native",
    "Spanish – Business Fluency",
    "Hindi – Fluent"
];

const ToolsTechnologies = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/skills.png)',
                    opacity: 0.5,
                }}
            />

            {/* Black Translucent Overlay with Soft Gradient and Blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/58 to-black/60 backdrop-blur-md pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
                        Core Skills
                    </h2>
                    <p className="text-lg text-white/90 font-light max-w-2xl mx-auto">
                        Key competencies driving business growth and strategic impact.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 justify-items-stretch">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex"
                        >
                            <div className="relative w-full bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-800 hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 cursor-default overflow-hidden"
                            >
                                {/* Frosted Glass Border Glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none" />

                                <span className="relative block text-slate-900 font-semibold tracking-tight text-sm sm:text-base group-hover:text-white transition-colors duration-200">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ToolsTechnologies;

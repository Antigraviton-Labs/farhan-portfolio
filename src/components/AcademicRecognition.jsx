import React from "react";

const professors = [
    { name: "Prof. Gabriella Lojacono", focus: "Brand authenticity and strategic paradoxes" },
    { name: "Prof. Marco Tortoriello", focus: "Strategy execution excellence" },
    { name: "Prof. Laura Pan", focus: "Digital transformation and gaming in luxury" },
    { name: "Prof. Stefania Carraro", focus: "Sustainability as the new exclusivity" },
];

const industryExposure = [
    "Ferrari leadership on emotion-driven brand building",
    "Strategy insights from BCG and Bain & Company",
    "Global perspectives on craftsmanship and luxury expansion from illycaffè and Poltrona Frau",
];

const AcademicRecognition = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/experience.png)',
                    opacity: 0.7,
                }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-white tracking-wide">
                        Academic Recognition & Global Exposure
                    </h2>
                    <div className="h-1 w-20 bg-white/40 mt-6 rounded-full mx-auto"></div>
                    <p className="text-white/80 font-light mt-4 max-w-2xl mx-auto text-lg">
                        Deep-dive into luxury brand strategy at one of the world's leading business schools.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl">
                    {/* Title */}
                    <div className="mb-8">
                        <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">
                            Certificate Programme
                        </p>
                        <h3 className="text-2xl md:text-3xl font-serif text-white font-medium leading-tight">
                            Luxury Industries & Brand Management
                        </h3>
                        <p className="text-white/70 font-light mt-2 text-lg">
                            SDA Bocconi School of Management, Milan
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-4 mb-10">
                        {[
                            "Successfully completed the Luxury Industries and Brand Management module at SDA Bocconi School of Management, Milan",
                            "Part of MSc Management programme at Warwick Business School",
                            "Gained deep exposure to luxury brand strategy, heritage management, and long-term value creation",
                            "Explored brand authenticity, strategic execution, digital innovation, and sustainability as drivers of modern luxury",
                            "Insights from the programme directly inspired the final MSc dissertation topic, identifying a recognition gap within the luxury brand ecosystem",
                        ].map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-white/90 font-light leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>

                    {/* Two Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Academic Guidance */}
                        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                            <h4 className="text-white font-medium text-lg mb-5 flex items-center gap-2">
                                <span className="text-xl">🎓</span> Academic Guidance
                            </h4>
                            <div className="space-y-4">
                                {professors.map((prof, idx) => (
                                    <div key={idx} className="border-l-2 border-blue-400/50 pl-4">
                                        <p className="text-white font-medium text-sm">{prof.name}</p>
                                        <p className="text-white/60 font-light text-sm mt-0.5">{prof.focus}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Industry Exposure */}
                        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                            <h4 className="text-white font-medium text-lg mb-5 flex items-center gap-2">
                                <span className="text-xl">🌍</span> Industry Exposure
                            </h4>
                            <div className="space-y-4">
                                {industryExposure.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-white/90 font-light leading-relaxed text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicRecognition;

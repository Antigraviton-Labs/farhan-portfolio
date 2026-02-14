import React from "react";

const About = () => {
    return (
        <section id="about" className="py-[40px] md:py-[56px] lg:py-[96px] bg-transparent relative overflow-hidden">
            {/* Background Image - Fully Covering */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/about.png)',
                    opacity: 0.95,
                }}
            />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-sm pointer-events-none" />

            <div className="w-full px-[20px] md:container md:mx-auto md:px-12 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-start">

                    {/* Left Column - Static Header */}
                    <div className="w-full md:w-1/4 text-center md:text-left md:sticky md:top-32">
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white leading-tight inline-block md:block relative pb-4 mx-auto md:mx-0">
                            About Me
                            <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-white/30"></span>
                        </h3>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-3/4 space-y-10">
                        <div>
                            {/* Paragraph 1 - Intro */}
                            <p className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed md:leading-relaxed text-left max-w-full md:max-w-none">
                                I am Farhan Bagwan, a results-driven <span className="font-medium text-white underline decoration-blue-400">business and growth professional</span> with hands-on experience in <span className="font-medium text-white underline decoration-blue-400">financial services</span>, <span className="font-medium text-white underline decoration-blue-400">B2C SaaS</span>, and <span className="font-medium text-white underline decoration-blue-400">consulting-led environments</span>. My work spans business management, financial performance analysis, stakeholder engagement, and project delivery across technology, operations, compliance, and legal teams.
                            </p>

                            {/* Divider */}
                            <div className="h-[1px] w-16 bg-white/30 my-8" />

                            {/* Paragraph 2 - Approach */}
                            <p className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed md:leading-relaxed text-left max-w-full md:max-w-none">
                                I have a strong track record of identifying <span className="font-medium text-white underline decoration-blue-400">operational inefficiencies</span>, implementing <span className="font-medium text-white underline decoration-blue-400">risk and control frameworks</span>, and driving measurable improvements through <span className="font-medium text-white underline decoration-blue-400">data analysis and automation</span>. I am particularly passionate about process optimisation, digital transformation, and leveraging data to support strategic decision-making.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;

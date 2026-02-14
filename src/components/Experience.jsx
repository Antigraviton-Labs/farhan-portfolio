import React, { useState } from "react";

const experiences = [
    {
        period: "MAY 2025 — NOV 2025",
        title: "Growth Manager",
        company: "Inforens (B2C SaaS EdTech)",
        location: "London, UK | Hybrid",
        desc: "Partnered with Sales and Technology teams to manage day-to-day business operations and resolve client onboarding challenges.",
        details: [
            "Successfully eliminated 90% of critical onboarding blockers within 24 hours",
            "Coordinated cross-functional initiatives across Technology, Sales, and Legal teams to deliver the end-to-end launch of a key product on schedule",
            "Analyzed business performance data to identify a major signup funnel bottleneck; led A/B testing initiatives that reduced customer drop-off by 20%",
            "Designed and implemented a data audit framework in Excel to assess content gaps, resulting in a 50% increase in content-driven conversions"
        ]
    },
    {
        period: "JUN 2023 — JUL 2024",
        title: "Founder & Strategy Lead",
        company: "Crowd-Ex Media (B2B Marketing Agency)",
        location: "Pune, India | On-site",
        desc: "Founded and led a B2B marketing agency, managing 20+ client accounts and acting as the primary strategic advisor.",
        details: [
            "Aligned digital solutions with business goals across 20+ client accounts",
            "Evaluated complex business challenges for a fintech startup, designing and delivering a scalable digital growth strategy",
            "Implemented a robust control and governance framework across all client deliverables, ensuring 100% compliance",
            "Successfully mitigated operational and reputational risk while maintaining high-quality execution across multiple concurrent projects"
        ]
    },
    {
        period: "SEP 2022 — MAY 2023",
        title: "Business Analyst",
        company: "ICICI Bank Ltd.",
        location: "Pune, India | On-site",
        desc: "Monitored and analyzed financial and operational performance for senior leadership.",
        details: [
            "Created interactive Excel dashboards that reduced forecasting errors by 15%",
            "Collaborated with front-office stakeholders to support key business initiatives and digital transformation programs",
            "Drove operational efficiency by identifying automation opportunities, reducing manual process time by 25%",
            "Conducted market and regulatory analysis (including Open Banking developments) and delivered strategic insights",
            "Operated within strict governance frameworks, performing control checks to ensure accurate and compliant financial reporting"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Image with White Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/backgrounds/experience.png)',
                    opacity: 0.7,
                }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                {/* Header */}
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Professional Experience</h2>
                    <div className="h-1 w-20 bg-white mt-6 rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="relative border-l border-white ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceCard = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pl-8 md:pl-16 group">
            {/* Timeline Node */}
            <div className={`absolute left-[-5px] md:left-[-6px] top-2 w-3 h-3 rounded-full border-2 transition-colors duration-200 ${index === 0 ? 'bg-white border-white' : 'bg-white border-white group-hover:border-white'}`} />

            {/* Content Card */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="glass-card cursor-pointer p-6 rounded-xl border border-transparent hover:border-white hover:bg-slate-900 hover:shadow-xl transition-all duration-200 group/card"
            >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-medium text-white group-hover/card:text-white transition-colors duration-200">
                        {data.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-white group-hover/card:text-white mt-1 md:mt-0 transition-colors duration-200">
                        {data.period}
                    </span>
                </div>

                <h4 className="text-base text-white font-medium mb-1 group-hover/card:text-white transition-colors duration-200">{data.company}</h4>
                <p className="text-sm text-white/70 mb-4">{data.location}</p>

                <p className="text-white leading-relaxed font-light text-lg group-hover/card:text-white transition-colors duration-200">
                    {data.desc}
                </p>

                {/* Expandable Content - CSS-only animation */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <ul className="mt-6 space-y-3 border-t border-white group-hover/card:border-white pt-6 transition-colors duration-200">
                        {data.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-white group-hover/card:text-white text-sm md:text-base font-light transition-colors duration-200">
                                <span className="w-1.5 h-1.5 bg-white group-hover/card:bg-white rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-200" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;

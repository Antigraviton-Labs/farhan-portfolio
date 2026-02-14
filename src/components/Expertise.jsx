import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Expertise = () => {
    const [selected, setSelected] = useState("analysis");
    return (
        <section id="expertise" className="py-12 md:py-16 lg:py-20 bg-transparent relative">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">

                {/* Header Area */}
                <div className="text-center mb-6 md:mb-8 lg:mb-10 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900">
                        Core Expertise
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base tracking-wide font-light lowercase">
                        delivering strategic value across business analysis, process optimisation, and risk management
                    </p>
                </div>

                {/* Expertise Tabs */}
                <Tabs value={selected} onValueChange={(v) => setSelected(v)} className="w-full">
                    {/* Mobile grid of plain buttons */}
                    <div className="grid grid-cols-2 gap-0 max-w-md mx-auto w-full md:hidden mb-4">
                        {["analysis", "process", "risk", "stakeholder"].map((tab, idx) => {
                            const label =
                                tab === "analysis" ? "Business Analysis" :
                                    tab === "process" ? "Process Optimisation" :
                                        tab === "risk" ? "Risk & Compliance" : "Stakeholder Mgmt";

                            const isTopRow = idx < 2;
                            const isLeftCol = idx % 2 === 0;
                            const borders = `${isTopRow ? 'border-b' : ''} ${isLeftCol ? 'border-r' : ''} border-slate-200`;
                            const corners = idx === 0 ? 'rounded-tl-lg' : idx === 1 ? 'rounded-tr-lg' : idx === 2 ? 'rounded-bl-lg' : 'rounded-br-lg';
                            const active = selected === tab;

                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setSelected(tab)}
                                    className={`w-full h-14 flex items-center justify-center px-3 text-sm font-medium transition-colors duration-150 ${borders} ${corners} ${active ? 'bg-[#062242] text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                                >
                                    <span className="truncate text-center">{label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop - pill style TabsList */}
                    <div className="hidden md:block mb-4 md:mb-6 lg:mb-8">
                        <TabsList className="w-full max-w-3xl mx-auto flex justify-center bg-slate-100 p-1 rounded-full border border-slate-200">
                            {["analysis", "process", "risk", "stakeholder"].map((tab) => {
                                const label =
                                    tab === "analysis" ? "Business & Financial Analysis" :
                                        tab === "process" ? "Process Optimisation" :
                                            tab === "risk" ? "Risk & Compliance" : "Stakeholder Management";
                                return (
                                    <TabsTrigger
                                        key={tab}
                                        value={tab}
                                        className="rounded-full px-6 py-2.5 text-sm md:text-base font-medium text-slate-500 data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-md transition-colors duration-200 hover:text-slate-900 hover:bg-slate-200"
                                    >
                                        {label}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                </Tabs>

                {/* Content - Render based on selected state */}
                <div className="mt-6">
                    {selected === "analysis" && (
                        <TabContentLayout
                            title="Business & Financial Analysis"
                            summary="Driving measurable business impact through financial modelling, performance dashboards, and data-driven insights."
                            bullets={[
                                "Financial modelling and forecasting",
                                "Interactive dashboards and KPI reporting",
                                "Business performance evaluation",
                                "Market and regulatory analysis",
                                "Data audit frameworks and content gap analysis",
                            ]}
                            imageSrc="/ExpertieseImages/growth.png"
                        />
                    )}

                    {selected === "process" && (
                        <TabContentLayout
                            title="Process Optimisation & Automation"
                            summary="Identifying operational inefficiencies and driving measurable improvements through automation and digital transformation."
                            bullets={[
                                "Process mapping and efficiency analysis",
                                "Automation opportunity identification",
                                "A/B testing and conversion optimisation",
                                "Digital transformation execution",
                                "Content-driven conversion strategy",
                            ]}
                            imageSrc="/ExpertieseImages/finance.png"
                        />
                    )}

                    {selected === "risk" && (
                        <TabContentLayout
                            title="Risk, Controls & Compliance"
                            summary="Implementing governance frameworks and control mechanisms to ensure compliant, accurate reporting and risk mitigation."
                            bullets={[
                                "Risk and control framework implementation",
                                "Regulatory compliance monitoring",
                                "Governance framework management",
                                "Financial reporting accuracy",
                                "Operational and reputational risk mitigation",
                            ]}
                            imageSrc="/ExpertieseImages/gtm.png"
                        />
                    )}

                    {selected === "stakeholder" && (
                        <TabContentLayout
                            title="Stakeholder & Project Management"
                            summary="Collaborating across cross-functional teams to deliver projects on schedule and translate strategy into execution."
                            bullets={[
                                "Cross-functional team coordination",
                                "Front-office stakeholder engagement",
                                "End-to-end project delivery",
                                "Client relationship management",
                                "Scalable delivery model design",
                            ]}
                            imageSrc="/ExpertieseImages/leadership.png"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

// Reusable Layout Component for Tab Content
const TabContentLayout = ({ title, summary, bullets, imageSrc }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Column - Textual Expertise */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-serif text-slate-800 mb-3">{title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">{summary}</p>
                </div>

                <ul className="space-y-3 pl-1">
                    {bullets.map((item, idx) => (
                        <li key={idx} className="flex items-start group">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 group-hover:bg-slate-600 transition-colors duration-200" />
                            <span className="text-slate-700 font-light group-hover:text-slate-900 transition-colors duration-200 cursor-default">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Column - Professional Image */}
            <div className="glass-card hidden lg:flex items-center justify-center lg:h-[400px] lg:min-h-[220px] border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200 group">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                />
            </div>

        </div>
    );
};

export default Expertise;

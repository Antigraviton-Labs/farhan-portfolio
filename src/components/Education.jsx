import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        institution: "Warwick Business School",
        degree: "MSc Management (Consulting Specialisation)",
        grade: "Final Grade: Distinction",
        modules: [
            "Digital Strategy & Agile Transformation",
            "Data-Driven Decision Making",
            "Corporate Finance",
        ],
    },
    {
        institution: "Brihan Maharashtra College of Commerce",
        degree: "Bachelor of Commerce (Costs & Works Accounting)",
        grade: "First-Class Honours",
        modules: [
            "Cost Accounting & Management Control",
            "Financial Accounting & Reporting",
            "Business Economics",
        ],
    },
];


const Education = () => {
    return (
        <section id="education" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900">
                        Education
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base tracking-wide font-light mt-3 lowercase">
                        academic foundations driving strategic excellence
                    </p>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="glass-card bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-medium text-slate-900 group-hover:text-slate-800 transition-colors">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-slate-600 font-light mt-1">
                                        {edu.degree}
                                    </p>
                                </div>
                            </div>

                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                {edu.grade}
                            </p>

                            {edu.modules.length > 0 && (
                                <div className="border-t border-slate-100 pt-4">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                                        Key Modules
                                    </p>
                                    <ul className="space-y-2">
                                        {edu.modules.map((mod, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start text-slate-700 font-light text-sm"
                                            >
                                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                                {mod}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';
import {ArrowRight, BrainCircuit, ExternalLink, FileText, MousePointer2} from 'lucide-react';
import giaoImg from '../assets/images/giao.png';

export const SectionTrust: React.FC = () => {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-kina-text mb-4">
                        Built by Runners, Backed by Research.
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From personal frustration to scientific validation, to technological breakthrough.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">

                    {/* Desktop Connectors (Arrows) */}
                    <div className="hidden md:block absolute top-1/2 left-[31%] -translate-y-1/2 z-10 text-gray-300">
                        <ArrowRight size={32}/>
                    </div>
                    <div className="hidden md:block absolute top-1/2 right-[31%] -translate-y-1/2 z-10 text-gray-300">
                        <ArrowRight size={32}/>
                    </div>

                    {/* Card 1: THE FOUNDER (The Origin) */}
                    <div
                        className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform flex flex-col items-center relative z-0">
                        <div
                            className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md ring-1 ring-gray-100">
                            <img
                                src={giaoImg}
                                alt="Dac Linh Giao NGUYEN"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-sm font-bold mb-3 text-kina-blue uppercase tracking-widest">The Founder</h3>
                        <div className="mb-6 flex flex-col items-center">
                            <p className="font-bold text-lg text-kina-text">Dac Linh Giao NGUYEN</p>
                            <p className="text-kina-subtext text-xs uppercase font-medium mt-1">Marathoner & Field
                                Researcher</p>
                            <a href="https://www.linkedin.com/in/daclinhgiao-nguyen/"
                               className="text-xs text-kina-blue hover:underline flex items-center gap-1 mt-2">
                                View Profile <ExternalLink size={10}/>
                            </a>
                        </div>
                        <blockquote
                            className="italic text-gray-600 font-medium border-l-2 border-kina-green pl-4 text-left">
                            "I built KINA because I lived the problem."
                        </blockquote>
                    </div>

                    {/* Card 2: THE RESEARCH (The Validation) */}
                    <div
                        className="p-8 bg-white rounded-2xl border-2 border-gray-100 text-center shadow-lg hover:-translate-y-1 transition-transform flex flex-col items-center relative z-20 md:scale-105">
                        <div
                            className="w-16 h-16 bg-kina-green/10 text-kina-green rounded-full flex items-center justify-center mb-6">
                            <FileText size={32}/>
                        </div>
                        <h3 className="text-sm font-bold mb-6 text-kina-blue uppercase tracking-widest">The
                            Research</h3>

                        <div className="w-full space-y-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <p className="text-4xl font-extrabold text-kina-text mb-2">100+</p>
                                <p className="text-sm text-gray-600 font-medium leading-tight">
                                    athletes interviewed and studied to understand the modern athlete.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                                <p className="text-4xl font-extrabold text-kina-text mb-2">2 Years</p>
                                <p className="text-sm text-gray-600 font-medium leading-tight">
                                    of research shaped KINA's unique approach.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: THE FOUNDATION (The Solution) */}
                    <div
                        className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 transition-transform flex flex-col items-center relative z-0">
                        <div
                            className="w-16 h-16 bg-kina-blue/10 text-kina-blue rounded-full flex items-center justify-center mb-6">
                            <BrainCircuit size={32}/>
                        </div>
                        <h3 className="text-sm font-bold mb-4 text-kina-blue uppercase tracking-widest">The
                            Technology</h3>

                        <ul className="text-left space-y-3 mb-8 w-full">
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-kina-blue rounded-full mt-1.5 shrink-0"></div>
                                Proprietary AI concepts tailored for endurance sports.
                            </li>
                            <li className="text-sm text-gray-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-kina-blue rounded-full mt-1.5 shrink-0"></div>
                                Digital Twin technology that learns from your habits.
                            </li>
                        </ul>

                        <a href="#prototype"
                           className="mt-auto group flex items-center gap-2 bg-kina-green text-white px-4 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-green-600 transition-colors cursor-pointer">
                            <MousePointer2 size={16}/>
                            <span>See Interactive Demo</span>
                        </a>
                    </div>

                </div>

                {/* Enhanced Bottom Callout - Reformatted as a statement */}
                <div className="mt-16 bg-kina-text text-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto text-center">
                    <p className="font-bold text-2xl mb-2">Don't wait for launch day.</p>
                    <p className="text-gray-300 text-lg">
                        Early supporters get instant prototype access and become founding beta users.
                    </p>
                </div>
            </div>
        </section>
    );
};
import React from 'react';
import {EmailCapture} from './EmailCapture';
import {BookOpenCheck, Gift, Lock, Quote} from 'lucide-react';
import manifestoCover from '../assets/images/kina-manifesto.png';

export const SectionManifesto: React.FC = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-kina-bg relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-kina-text mb-6">
                    Are You the Athlete of 2025?
                </h2>
                <p className="text-xl md:text-2xl text-kina-blue font-medium max-w-3xl mx-auto">
                    The Manifesto. Discover the challenges of the new era and the keys to enlightened performance.
                </p>
            </div>

            <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row max-w-6xl mx-auto relative z-10">
                {/* Image Side with 3D effect */}
                <div
                    className="md:w-5/12 bg-gray-100 flex items-center justify-center p-8 md:p-12 relative overflow-hidden group min-h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-kina-blue/10 to-transparent"></div>
                    <img
                        src={manifestoCover}
                        alt="The Athlete of 2025 Manifesto Cover"
                        className="max-w-[260px] md:max-w-[280px] w-full h-auto shadow-2xl rounded-lg transform md:-rotate-3 md:translate-x-4 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-3xl z-10"
                    />
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div
                        className="flex items-center gap-2 text-kina-subtext font-bold uppercase tracking-widest text-xs mb-6">
                        <BookOpenCheck size={16}/> Exclusive Content
                    </div>

                    <h3 className="text-2xl font-bold text-kina-text mb-6">Inside the Manifesto:</h3>

                    {/* Distinct Quote Card */}
                    <div className="bg-gray-50 p-6 rounded-xl mb-6 relative border border-gray-100">
                        <Quote className="absolute top-4 left-4 text-kina-blue/20 w-8 h-8 rotate-180"
                               fill="currentColor"/>
                        <p className="text-lg text-kina-text leading-relaxed italic relative z-10 pl-4 pt-2">
                            "Data addiction, algorithmic judgment, social pressure... The modern athlete is facing
                            invisible walls. We wrote this manifesto to explore these challenges and propose a new
                            path."
                        </p>
                    </div>

                    {/* Distinct Gift Card */}
                    <div
                        className="bg-kina-green/5 p-5 rounded-xl mb-8 border border-kina-green/20 flex gap-4 items-start">
                        <div className="bg-white p-2.5 rounded-lg text-kina-green shadow-sm shrink-0 mt-0.5">
                            <Gift size={24}/>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-kina-green uppercase tracking-wide mb-1">Free
                                Gift</h4>
                            <p className="text-sm font-medium text-kina-text/80 leading-snug">
                                Included for all waitlist members: A self-diagnostic quiz to see where you stand.
                            </p>
                        </div>
                    </div>

                    {/* Inline Email Capture */}
                    <div className="mt-2 pt-6 border-t border-gray-100">
                        <EmailCapture
                            id="manifesto-access"
                            buttonText="Join the Waitlist & Get the Manifesto"
                            placeholder="Email address"
                            variant="dark"
                            vertical={true}
                            source="waitlist_direct"
                        />

                        <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 mt-4">
                            <Lock size={10}/>
                            <span>Your data is safe. Zero spam.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
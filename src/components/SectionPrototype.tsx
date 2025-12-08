import React from 'react';
import {EmailCapture} from './EmailCapture';
import {Globe, MousePointerClick, Users} from 'lucide-react';
import kinaSS from '../assets/images/kina-ss.png';

export const SectionPrototype: React.FC = () => {
    return (
        <section id="prototype" className="bg-kina-text text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Content Side */}
                <div className="order-2 lg:order-1">
                    <div
                        className="inline-block bg-kina-green/20 text-kina-green font-bold px-4 py-2 rounded-full text-sm mb-6 border border-kina-green/30">
                        PROOF OF CONCEPT
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                        This isn't vaporware.<br/> <span className="text-kina-green">Try it yourself.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-300 mb-10">
                        <p className="flex items-center gap-3">
                            <MousePointerClick className="text-kina-blue"/>
                            Interactive Demo Available Immediately After You Reserve Your Spot
                        </p>
                        <div className="bg-white/5 p-4 rounded-lg border-l-4 border-kina-blue">
                            <p className="text-white">
                                Every early supporter gets instant access to our working prototype — before anyone else.
                            </p>
                        </div>
                    </div>

                    {/* Premium Form Container - Removed max-w-md for full width alignment */}
                    <div
                        className="w-full bg-gradient-to-b from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                        <div
                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kina-green to-kina-blue"></div>

                        <h4 className="font-bold text-xl mb-2 text-white">Get Instant Demo Access</h4>
                        <p className="text-sm text-gray-400 mb-6 flex items-center gap-2">
                            <Users size={14} className="text-kina-green"/> Join 300+ early supporters
                        </p>

                        <EmailCapture
                            id="prototype-access"
                            buttonText="Get Demo Access"
                            variant="secondary"
                            source="waitlist_direct"
                        />

                        {/* Technical Reassurance */}
                        <p className="text-xs text-gray-400 mt-4 flex items-center gap-2 opacity-80">
                            <Globe size={12} className="text-kina-green"/>
                            Works in your browser - No installation required.
                        </p>
                    </div>
                </div>

                {/* Phone Mockup Side */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div
                        className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col justify-start items-center overflow-hidden">
                        {/* Phone Notch/Speaker */}
                        <div
                            className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div
                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div
                            className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div
                            className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div
                            className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white relative flex flex-col">
                            {/* Fallback Image / Placeholder */}
                            <img
                                src={kinaSS}
                                alt="KINA Interface Prototype"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
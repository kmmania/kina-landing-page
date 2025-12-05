import React from 'react';
import {EmailCapture} from './EmailCapture';
import {ArrowDown, BookOpen, Rocket} from 'lucide-react';
import kinaLogo from '../assets/images/kina-logo.png';

export const SectionHero: React.FC = () => {
    return (
        <section className="relative pt-20 pb-28 overflow-hidden bg-kina-bg min-h-[90vh] flex flex-col justify-center">
            <div
                className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Logo Stylisé */}
                <div className="mb-8 transition-transform hover:scale-105 duration-500">
                    <div className="flex items-center gap-3">
                        <img
                            src={kinaLogo}
                            alt="KINA Logo"
                            className="h-12 md:h-14 w-auto drop-shadow-sm"
                        />
                        <h1 className="text-3xl font-bold tracking-tighter text-kina-text">
                            KINA
                        </h1>
                    </div>
                </div>

                {/* New Headline Hierarchy: Emotional Punch + Description */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-kina-text mb-6 leading-[0.9] tracking-tighter">
                    Stop Tracking.<br className="hidden md:block"/>
                    <span className="text-kina-green relative inline-block">
            Start Feeling.
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-kina-blue opacity-30" viewBox="0 0 100 10"
                 preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none"/>
            </svg>
          </span>
                </h1>

                <h2 className="text-xl sm:text-2xl text-kina-subtext font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                    Meet KINA. The AI Running Companion That Feels Your Every Stride.
                    <br/>
                    <span className="text-sm font-bold tracking-widest uppercase text-kina-blue mt-4 block">
            Coming to Kickstarter February 2026
          </span>
                </h2>

                {/* Enhanced Waitlist Box */}
                <div
                    className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-kina-blue/10 border border-white/50 max-w-4xl w-full mb-12 text-left relative overflow-hidden backdrop-blur-sm">
                    {/* Decorative accent */}
                    <div
                        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kina-blue to-kina-green"></div>

                    <h3 className="text-2xl font-bold text-kina-text mb-8 text-center sm:text-left">
                        Join the Founding Circle Waitlist:
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div
                            className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-kina-blue/30 transition-colors">
                            <div className="bg-white p-3 rounded-xl text-kina-blue shadow-sm shrink-0">
                                <Rocket size={24} strokeWidth={2.5}/>
                            </div>
                            <div>
                                <p className="text-kina-text text-lg leading-snug">
                                    <span
                                        className="font-bold block text-kina-text text-xl mb-1">1. Priority Access</span>
                                    Secure one of the 100 limited "Lifetime Legend" spots.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-kina-green/30 transition-colors">
                            <div className="bg-white p-3 rounded-xl text-kina-green shadow-sm shrink-0">
                                <BookOpen size={24} strokeWidth={2.5}/>
                            </div>
                            <div>
                                <p className="text-kina-text text-lg leading-snug">
                                    <span
                                        className="font-bold block text-kina-text text-xl mb-1">2. Instant Value</span>
                                    Get the exclusive Manifesto "Are You the Athlete of 2025?".
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* Removed redundant label "RESERVE YOUR SPOT NOW" */}
                        <EmailCapture
                            id="hero-waitlist"
                            buttonText="Join the Waitlist & Get the Manifesto"
                            variant="secondary" /* Changed to Green as requested */
                        />

                        <div
                            className="mt-6 flex items-center justify-center sm:justify-start gap-3 text-kina-subtext text-sm font-medium">
                            <div className="flex -space-x-3">
                                <img className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                                     alt="Runner 1"/>
                                <img className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                     src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                                     alt="Runner 2"/>
                                <img className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                                     alt="Runner 3"/>
                            </div>
                            <p className="flex items-center gap-1">
                                <span className="font-bold text-kina-text text-base">300+ runners waiting</span>
                                <span className="hidden sm:inline">• Only 1,000 Founding spots available.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="animate-bounce text-kina-subtext/50">
                    <ArrowDown size={32}/>
                </div>
            </div>
        </section>
    );
};
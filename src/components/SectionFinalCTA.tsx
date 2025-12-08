import React from 'react';
import {EmailCapture} from './EmailCapture';
import {BookOpen, Check, Lock, Mail, Rocket, ShieldCheck} from 'lucide-react';

export const SectionFinalCTA: React.FC = () => {
    return (
        <section className="bg-kina-text text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-kina-green/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
                    Secure your Founding Member status.
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Don't let the 100 Lifetime spots slip away.
                </p>

                {/* Visual 3-Step Process */}
                <div className="hidden md:flex justify-between items-start max-w-3xl mx-auto mb-12 relative">
                    {/* Connector Line */}
                    <div className="absolute top-8 left-16 right-16 h-0.5 bg-white/10 -z-10"></div>

                    <div className="flex flex-col items-center gap-4 w-1/3">
                        <div
                            className="w-16 h-16 bg-gray-800 border-2 border-kina-green rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(153,199,148,0.2)]">
                            <Mail size={28} className="text-white"/>
                        </div>
                        <span className="font-bold text-lg">1. Join the list</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-1/3">
                        <div
                            className="w-16 h-16 bg-gray-800 border-2 border-white/20 rounded-2xl flex items-center justify-center">
                            <BookOpen size={28} className="text-gray-400"/>
                        </div>
                        <span className="font-medium text-gray-400">2. Read Manifesto</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-1/3">
                        <div
                            className="w-16 h-16 bg-gray-800 border-2 border-white/20 rounded-2xl flex items-center justify-center">
                            <Rocket size={28} className="text-gray-400"/>
                        </div>
                        <span className="font-medium text-gray-400">3. Priority Access</span>
                    </div>
                </div>

                {/* Mobile List (Simpler) */}
                <div className="md:hidden space-y-4 mb-10 text-left bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-8 h-8 bg-kina-green rounded-full flex items-center justify-center font-bold text-white shrink-0">1
                        </div>
                        <span className="font-bold">Join the list</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <div
                            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold shrink-0">2
                        </div>
                        <span>Read the Manifesto</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <div
                            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center font-bold shrink-0">3
                        </div>
                        <span>Get priority access in February</span>
                    </div>
                </div>

                {/* Incentive Reminder */}
                <div
                    className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm sm:text-base font-medium text-gray-200">
                    <span className="flex items-center gap-2"><Check size={16} className="text-kina-green"
                                                                     strokeWidth={3}/> Instant Manifesto download</span>
                    <span className="flex items-center gap-2"><Check size={16} className="text-kina-green"
                                                                     strokeWidth={3}/> 24H priority Kickstarter access</span>
                    <span className="flex items-center gap-2"><Check size={16} className="text-kina-green"
                                                                     strokeWidth={3}/> Exclusive founding benefits</span>
                </div>

                <div className="flex flex-col items-center gap-6">
                    {/* Social Proof Above Form */}
                    <div className="flex items-center gap-3 animate-fade-in">
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border border-gray-800"
                                 src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                                 alt="User"/>
                            <img className="w-6 h-6 rounded-full border border-gray-800"
                                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                                 alt="User"/>
                            <img className="w-6 h-6 rounded-full border border-gray-800"
                                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                                 alt="User"/>
                        </div>
                        <p className="text-sm text-gray-300"><span
                            className="text-white font-bold">300+ runners</span> waiting</p>
                    </div>

                    {/* Enhanced Form Container */}
                    <div
                        className="w-full max-w-lg bg-white p-2.5 rounded-2xl shadow-[0_0_40px_rgba(153,199,148,0.15)] hover:shadow-[0_0_50px_rgba(153,199,148,0.25)] transition-shadow duration-500">
                        <EmailCapture
                            id="final-cta"
                            buttonText="Join the Waitlist Now"
                            placeholder="Enter your email to secure priority access"
                            variant="secondary"
                            source="waitlist_direct"
                        />
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-500 text-xs mt-2">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck size={14} className="text-kina-green"/>
                            <span>No spam, unsubscribe anytime.</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
                        <div className="flex items-center gap-1.5">
                            <Lock size={14} className="text-gray-500"/>
                            <span>GDPR Compliant & Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
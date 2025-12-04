import React, {useState} from 'react';
import {History, Play, Trophy, Zap} from 'lucide-react';

export const SectionSolution: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Unified Background Element */}
            <div
                className="absolute top-1/4 left-0 right-0 bottom-0 bg-gradient-to-b from-kina-blue/5 to-transparent -z-10 rounded-[3rem] mx-4"></div>

            <h2 className="text-3xl sm:text-5xl font-bold text-center text-kina-text mb-12 max-w-5xl mx-auto leading-tight">
                What if your technology started a <span
                className="underline decoration-kina-green decoration-4 underline-offset-4">conversation</span> with
                you?
            </h2>

            {/* Video Container with Custom Thumbnail */}
            <div className="relative w-full max-w-5xl mx-auto mb-16 group">
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-kina-blue to-kina-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    {!isPlaying ? (
                        <div
                            className="w-full h-full relative cursor-pointer group"
                            onClick={() => setIsPlaying(true)}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1596727147705-54a9d0943f72?q=80&w=2069&auto=format&fit=crop"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div
                                className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                <div
                                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <div
                                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                                        <Play size={32} className="text-kina-green ml-1 fill-kina-green"/>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-xl drop-shadow-md">Watch How KINA Changes Everything</p>
                                <p className="text-sm font-medium opacity-90">2 min watch</p>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/o9LAW6-e3Os?autoplay=1"
                            title="Watch How KINA Changes Everything"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>

            {/* Visual Connector */}
            <div className="max-w-5xl mx-auto mb-8 flex items-center justify-center gap-4 opacity-60">
                <div className="h-px w-24 bg-gray-300"></div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">
                    Don't have 2 minutes? Here's the essence
                </p>
                <div className="h-px w-24 bg-gray-300"></div>
            </div>

            {/* Enhanced Summary Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Before */}
                <div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-kina-blue/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                    <div
                        className="w-14 h-14 bg-kina-blue/10 text-kina-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kina-blue group-hover:text-white transition-colors duration-300">
                        <History size={28} strokeWidth={2}/>
                    </div>
                    <h4 className="font-bold text-xl text-kina-text mb-3">Before</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        KINA contextualizes your data so you understand the "why".
                    </p>
                </div>

                {/* Card 2: During */}
                <div
                    className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-t-kina-green border-x border-b border-gray-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
                    <div className="absolute inset-0 bg-kina-green/5 -z-10"></div>
                    <div
                        className="w-14 h-14 bg-kina-green/20 text-kina-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Zap size={28} strokeWidth={2} fill="currentColor"
                             className="opacity-20 text-kina-green absolute"/>
                        <Zap size={28} strokeWidth={2} className="relative z-10"/>
                    </div>
                    <h4 className="font-bold text-xl text-kina-text mb-3">During</h4>
                    <p className="text-gray-800 font-semibold leading-relaxed">
                        Strategic guidance in real-time, not just static targets.
                    </p>
                </div>

                {/* Card 3: After */}
                <div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                    <div
                        className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <Trophy size={28} strokeWidth={2}/>
                    </div>
                    <h4 className="font-bold text-xl text-kina-text mb-3">After</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Reframing tough sessions into wins and learning moments.
                    </p>
                </div>
            </div>
        </section>
    );
};
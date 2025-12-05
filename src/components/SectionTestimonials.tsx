import React from 'react';
import type {Testimonial} from '../types';
import {Activity, ExternalLink, MapPin, Quote, Timer} from 'lucide-react';

const testimonials: Testimonial[] = [
    {
        author: "Jully Avila",
        role: "Trail and Marathon Runner, Content Creator",
        location: "Philippines",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "When I saw KINA's vision of technology that converses instead of judges, it clicked. Running should feel like freedom, not a performance review. I'm supporting this project because it promises to bring joy back to training— and that's something my generation needs to see.",
        highlight: "Running should feel like freedom, not a performance review.",
        socialLink: "#"
    },
    {
        author: "Salomé Brun",
        role: "Marathon Runner",
        location: "France / Ethiopia",
        stats: "2:30 PB",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "In Ethiopian running culture, we say the body knows before the mind understands. KINA's vision of creating a companion that truly listens—not just measures—honors this wisdom. I want to see this exist because running deserves technology that respects our intuition.",
        highlight: "the body knows before the mind understands.",
        socialLink: "#"
    },
    {
        author: "Vincent Dutot",
        role: "Researcher and Marathon Runner",
        location: "France",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "I teach social media for a living. I run for balance. KINA's vision of bridging data and intuition through dialogue speaks to both sides of me. This is the kind of technology I want to exist—smart enough to know when to guide, and wise enough to know when to listen.",
        highlight: "KINA's vision of bridging data and intuition through dialogue speaks to both sides of me.",
        socialLink: "https://www.linkedin.com/in/vincentdutot/"
    }
];

export const SectionTestimonials: React.FC = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-kina-bg/50 relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-kina-text mb-6">
                Voices Supporting KINA's Vision
            </h2>
            <p className="text-center text-kina-text mb-16 max-w-2xl mx-auto text-lg text-gray-600">
                Athletes around the world who believe in a more human approach to training technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                {testimonials.map((t, idx) => {
                    // Center card (Salomé) gets special treatment
                    const isCenter = idx === 1;

                    return (
                        <div
                            key={idx}
                            className={`bg-white p-8 rounded-2xl border flex flex-col relative transition-all duration-300 group
                ${isCenter
                                ? 'md:-mt-4 md:mb-4 shadow-2xl border-kina-green/30 z-10 transform md:scale-105'
                                : 'shadow-lg border-gray-100 hover:shadow-xl hover:-translate-y-1'
                            }
              `}
                        >
                            <Quote
                                className={`absolute top-6 right-6 w-8 h-8 transform scale-x-[-1] ${isCenter ? 'text-kina-green/20' : 'text-kina-blue/10'}`}
                                fill="currentColor"/>

                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`w-16 h-16 rounded-full overflow-hidden border-2 ${isCenter ? 'border-kina-green ring-2 ring-kina-green/20' : 'border-gray-200'}`}>
                                    <img src={t.image} alt={t.author} className="w-full h-full object-cover"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-kina-text text-lg leading-tight">{t.author}</h4>
                                    {t.socialLink && (
                                        <a href={t.socialLink}
                                           className="text-xs text-kina-blue hover:underline flex items-center gap-1 mt-0.5">
                                            View Profile <ExternalLink size={10}/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6 flex-1">
                                <p className="text-gray-600 text-[15px] leading-relaxed italic">
                                    "{t.quote.split(t.highlight)[0]}
                                    <span
                                        className={`font-bold ${isCenter ? 'text-kina-green' : 'text-kina-blue'} not-italic bg-opacity-10 px-0.5 rounded`}>
                    {t.highlight}
                  </span>
                                    {t.quote.split(t.highlight)[1]}"
                                </p>
                            </div>

                            <div
                                className={`pt-5 border-t ${isCenter ? 'border-kina-green/10' : 'border-gray-100'} space-y-2`}>
                                <div className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                                    <Activity size={16} className="text-gray-400 mt-0.5 shrink-0"/>
                                    <span className="uppercase tracking-wide text-xs mt-0.5">{t.role}</span>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={14} className="text-gray-400"/>
                                        <span>{t.location}</span>
                                    </div>
                                    {t.stats && (
                                        <div className="flex items-center gap-1.5 text-kina-green font-bold">
                                            <Timer size={14}/>
                                            <span>{t.stats}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center">
                <div
                    className="inline-block bg-white border border-gray-200 px-8 py-4 rounded-full text-kina-text text-sm shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-kina-green"></div>
                    <span className="font-medium">
              These individuals tested KINA's prototype and chose to support the vision behind it.
            </span>
                </div>
            </div>
        </section>
    );
};
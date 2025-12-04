import React, {useState} from 'react';
import {ArrowUp, Instagram, Linkedin, Mail, Send, Twitter, X} from 'lucide-react';
import {Button} from './Button';

export const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const closeModal = () => {
        setActiveModal(null);
        setFormStatus('idle');
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                closeModal();
            }, 2000);
        }, 1500);
    };

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-8 h-8 bg-kina-green rounded flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                            <span className="text-white font-bold text-xl italic pr-0.5">k</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">KINA</span>
                    </div>
                    <p className="text-xs text-gray-500">
                        © 2025 KINA. All rights reserved.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <button onClick={() => setActiveModal('privacy')}
                            className="hover:text-kina-green transition-colors">Privacy Policy
                    </button>
                    <button onClick={() => setActiveModal('terms')}
                            className="hover:text-kina-green transition-colors">Terms of Service
                    </button>
                    <button onClick={() => setActiveModal('contact')}
                            className="hover:text-kina-green transition-colors">Contact Support
                    </button>
                </div>

                {/* Socials & Top */}
                <div className="flex items-center gap-6">
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter
                            size={20}/></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20}/></a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin
                            size={20}/></a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-kina-green hover:text-white transition-all duration-300 group"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform"/>
                    </button>
                </div>
            </div>

            {/* Footer Modals */}
            {activeModal && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in text-gray-800">
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 z-10 transition-colors"
                        >
                            <X size={20}/>
                        </button>

                        {/* Modal Content - Scrollable */}
                        <div className="overflow-y-auto p-8 custom-scrollbar">

                            {/* Privacy Policy Content */}
                            {activeModal === 'privacy' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-kina-text mb-6">Privacy Policy</h3>
                                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                                        <p className="font-bold text-gray-800">Last updated: October 2025</p>
                                        <p>
                                            At KINA, we take your privacy seriously. This Privacy Policy explains how we
                                            collect, use, disclosure, and safeguard your information when you visit our
                                            website or use our application.
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">1. Information We
                                            Collect</h4>
                                        <p>
                                            [Insert detailed collection practices here: Personal Data, Derivative Data,
                                            Financial Data, Mobile Device Data, etc.]
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">2. Use of Your
                                            Information</h4>
                                        <p>
                                            [Insert usage details: Account management, Email correspondence, App
                                            functionality, etc.]
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">3. Disclosure of Your
                                            Information</h4>
                                        <p>
                                            [Insert disclosure policies: By Law, Third-Party Service Providers, etc.]
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg mt-6 border-l-4 border-kina-green">
                                            <p className="text-sm italic">
                                                This is a placeholder for the full legal document. Please replace with
                                                your official Privacy Policy before launch.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Terms of Service Content */}
                            {activeModal === 'terms' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-kina-text mb-6">Terms of Service</h3>
                                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                                        <p className="font-bold text-gray-800">Last updated: October 2025</p>
                                        <p>
                                            Please read these Terms of Service ("Terms", "Terms of Service") carefully
                                            before using the KINA website and mobile application (the "Service")
                                            operated by KINA ("us", "we", or "our").
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">1. Conditions of Use</h4>
                                        <p>
                                            [Insert conditions: Acceptance of terms, modification of terms, etc.]
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">2. Intellectual
                                            Property</h4>
                                        <p>
                                            [Insert IP clause: Content ownership, trademarks, copyrights, etc.]
                                        </p>
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">3. Termination</h4>
                                        <p>
                                            [Insert termination clause: Grounds for account termination, notice periods,
                                            etc.]
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg mt-6 border-l-4 border-kina-blue">
                                            <p className="text-sm italic">
                                                This is a placeholder for the full legal document. Please replace with
                                                your official Terms of Service before launch.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Contact Support Content */}
                            {activeModal === 'contact' && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div
                                            className="w-10 h-10 bg-kina-blue/10 text-kina-blue rounded-full flex items-center justify-center">
                                            <Mail size={20}/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-kina-text">Contact Support</h3>
                                            <p className="text-sm text-gray-500">We're here to help.</p>
                                        </div>
                                    </div>

                                    {formStatus === 'success' ? (
                                        <div className="text-center py-12 flex flex-col items-center">
                                            <div
                                                className="inline-flex p-4 bg-green-100 text-green-600 rounded-full mb-4 animate-bounce">
                                                <Send size={28}/>
                                            </div>
                                            <p className="font-bold text-xl text-gray-800 mb-2">Message Sent!</p>
                                            <p className="text-gray-500">We'll get back to you shortly.</p>
                                            <Button onClick={closeModal} variant="outline" className="mt-6">
                                                Close
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleContactSubmit} className="space-y-5">
                                            <div>
                                                <label
                                                    className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all"
                                                    required
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all"
                                                    required
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Message</label>
                                                <textarea
                                                    rows={4}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all resize-none"
                                                    required
                                                    placeholder="How can we help?"
                                                ></textarea>
                                            </div>
                                            <Button type="submit" variant="secondary" fullWidth
                                                    disabled={formStatus === 'submitting'}>
                                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};
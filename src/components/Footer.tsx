import React, {useState} from 'react';
import {ArrowUp, X} from 'lucide-react';
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import kinaLogo from '../assets/images/kina-logo.png';
import { ContactModal } from './ContactModal';

export const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src={kinaLogo}
                            alt="KINA Logo"
                            className="h-12 md:h-14 w-auto drop-shadow-sm"
                        />
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
                        <a href="https://x.com/kmmania"
                           className="text-gray-500 hover:text-white transition-colors"><FaTwitter
                            size={20}/></a>
                        <a href="https://www.instagram.com/kmmania/"
                           className="text-gray-500 hover:text-white transition-colors"><FaInstagram
                            size={20}/></a>
                        <a href="https://www.linkedin.com/company/kmmania/"
                           className="text-gray-500 hover:text-white transition-colors"><FaLinkedin
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
                                    <h3 className="text-2xl font-bold text-kina-text mb-2">KINA Privacy Policy</h3>
                                    <p className="text-sm text-gray-500 mb-6 font-medium">Last Updated: December
                                        2025</p>

                                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">1. Introduction</h4>
                                        <p>
                                            Welcome to KINA ("we," "our," or "us"). We are committed to protecting your
                                            personal information and your right to privacy. This policy explains how we
                                            collect, use, and share your information when you visit our landing page and
                                            join our waitlist.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">2. Information We
                                            Collect</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>Personal Information:</strong> We collect your email address and
                                                first name when you voluntarily sign up for our waitlist or download our
                                                Manifesto.
                                            </li>
                                            <li><strong>Usage Data:</strong> We may use standard cookies or analytics
                                                tools (like Vercel Analytics) to understand how visitors interact with
                                                our website (e.g., pages visited, time spent).
                                            </li>
                                        </ul>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">3. How We Use Your
                                            Information</h4>
                                        <p>We use your data for the following purposes only:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>To deliver the "Athlete of 2025" Manifesto.</li>
                                            <li>To send you updates regarding the KINA project and our Kickstarter
                                                campaign.
                                            </li>
                                            <li>To notify you when early access spots become available.</li>
                                        </ul>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">4. Data Sharing</h4>
                                        <p>
                                            We never sell your personal data. We may share data with trusted third-party
                                            service providers solely for the purpose of operating our site (e.g., email
                                            service providers, hosting services), who are bound by confidentiality
                                            obligations.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">5. Your Rights</h4>
                                        <p>
                                            You can unsubscribe from our emails at any time by clicking the
                                            "unsubscribe" link in the footer of our emails. If you wish to have your
                                            data completely deleted, please contact us at support@kina.run.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">6. Contact</h4>
                                        <p>
                                            For any questions about this policy, please <button
                                            onClick={() => setActiveModal('contact')}
                                            className="text-kina-blue hover:underline font-bold bg-transparent border-none p-0 cursor-pointer">contact
                                            us here</button>.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Terms of Service Content */}
                            {activeModal === 'terms' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-kina-text mb-2">KINA Terms of Service</h3>
                                    <p className="text-sm text-gray-500 mb-6 font-medium">Last Updated: December
                                        2025</p>

                                    <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                                        <h4 className="font-bold text-gray-800 text-lg mt-4">1. Acceptance of Terms</h4>
                                        <p>
                                            By accessing and using this website, you agree to be bound by these Terms of
                                            Service. If you do not agree with any part of these terms, you must not use
                                            this website.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">2. Nature of Service</h4>
                                        <p>
                                            KINA is currently in a pre-launch phase. Signing up for the waitlist does
                                            not guarantee access to the final product. The features described on this
                                            page are subject to change as we develop the product.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">3. Medical Disclaimer
                                            (IMPORTANT)</h4>
                                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                            <p className="text-gray-700">
                                                KINA is an AI companion for running and well-being, not a medical
                                                device. The content provided in our Manifesto, emails, and on this
                                                website is for informational and educational purposes only. It is not
                                                intended to be a substitute for professional medical advice, diagnosis,
                                                or treatment. Always seek the advice of your physician or other
                                                qualified health provider before starting any new exercise program. You
                                                assume full responsibility for any risks, injuries, or damages, known or
                                                unknown, which might occur as a result of using our information.
                                            </p>
                                        </div>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">4. Intellectual
                                            Property</h4>
                                        <p>
                                            All content on this website, including text, graphics, logos, and the
                                            "Athlete of 2025" Manifesto, is the property of KINA and protected by
                                            international copyright laws. You may share the Manifesto freely as long as
                                            it remains unaltered and attributed to KINA.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">5. Limitation of
                                            Liability</h4>
                                        <p>
                                            In no event shall KINA, nor its directors, employees, or partners, be liable
                                            for any indirect, incidental, special, consequential, or punitive damages
                                            arising out of your use of our website or content.
                                        </p>

                                        <h4 className="font-bold text-gray-800 text-lg mt-4">6. Governing Law</h4>
                                        <p>
                                            These Terms shall be governed by and defined following the laws of France,
                                            without regard to its conflict of law provisions.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Contact Support Content */}
                            <ContactModal 
                                isOpen={activeModal === 'contact'} 
                                onClose={closeModal} 
                            />
                            {/* {activeModal === 'contact' && (
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
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};
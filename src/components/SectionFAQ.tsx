import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { ContactModal } from './ContactModal';

const faqs: FAQItem[] = [
  {
    id: "launch-date",
    question: "When does the Kickstarter campaign launch?",
    preview: "February 2026. Priority access available via waitlist.",
    answer: "February 2026. Join the waitlist to get notified 24 hours before launch and secure priority access to limited Founding Member tiers."
  },
  {
    id: "missed-campaign",
    question: "What if I miss the Kickstarter campaign?",
    preview: "Founding Member benefits will never be available again.",
    badge: "LIMITED OFFER",
    badgeColor: "yellow",
    answer: "You'll still be able to use KINA after launch, but the Founding Member benefits (lifetime access options, numbered badges, exclusive recognition) will never be available again. These tiers are reserved exclusively for Kickstarter backers."
  },
  {
    id: "tracking-app",
    question: "Is this just another tracking app?",
    preview: "No. KINA converses instead of just tracking.",
    badge: "CORE CONCEPT",
    badgeColor: "green",
    answer: "No. KINA doesn't track — it converses. Instead of dashboards, you get dialogue. Instead of metrics alone, you get context. Watch the video above to see how it works."
  },
  {
    id: "access-timeline",
    question: "When will I get access to KINA?",
    preview: "MVP launches progressively starting Q2 2026.",
    badge: "TIMELINE",
    badgeColor: "blue",
    answer: "The MVP launches progressively starting in Q2 2026 (approximately 2-3 months after the campaign ends). Features will be released iteratively, so you'll start using KINA as it's being built. Early supporters become founding beta users throughout development."
  },
  {
    id: "email-privacy",
    question: "What happens to my email?",
    preview: "Manifesto first, then updates. Zero spam.",
    answer: "First, we send you the 'Athlete of 2025' Manifesto immediately. Then, you'll receive important updates about the development. Finally, you'll get the Priority Access Link 24 hours before the campaign goes public. Zero spam."
  },
  {
    id: "tiers-available",
    question: "What Founding Member tiers are available?",
    preview: "Co-Creator ($149), Visionary ($249), and Legend ($399).",
    answer: "Three tiers with different benefits:\n• Co-Creator ($149) — 3 years access, badge #501-1000\n• Visionary ($249) — 5 years all features, badge #101-500\n• Legend ($399) — Lifetime access, badge #1-100\nAll tiers include numbered badges, Hall of Fame recognition, and exclusive founding member benefits that will never return after Kickstarter."
  }
];

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getBadgeStyles = (color?: string) => {
    switch(color) {
      case 'green': return 'bg-kina-green/10 text-kina-green border-kina-green/20';
      case 'yellow': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'blue': return 'bg-kina-blue/10 text-kina-blue border-kina-blue/20';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div id={item.id} className="border-b border-gray-200 last:border-0 scroll-mt-24 transition-colors duration-300 hover:bg-gray-50/50">
      <button 
        className="w-full py-6 flex gap-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <span className={`text-lg font-bold text-kina-text group-hover:text-kina-blue transition-colors ${isOpen ? 'text-kina-blue' : ''}`}>
              {item.question}
            </span>
            {item.badge && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getBadgeStyles(item.badgeColor)}`}>
                {item.badge}
              </span>
            )}
          </div>
          
          {/* Preview Text (Only when closed) */}
          {!isOpen && (
            <p className="text-sm text-gray-400 font-medium transition-opacity duration-300">
              {item.preview}
            </p>
          )}
        </div>
        
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-kina-blue text-white border-kina-blue rotate-180' : 'bg-white text-gray-400 border-gray-200 group-hover:border-kina-blue group-hover:text-kina-blue'}`}>
           <ChevronDown size={18} />
        </div>
      </button>
      
      {/* Full Answer */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-600 leading-relaxed whitespace-pre-line text-base pl-1 border-l-2 border-kina-green/30 ml-1">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export const SectionFAQ: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="bg-kina-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-kina-text mb-3">
            Kickstarter Campaign FAQ
          </h2>
          <p className="text-kina-subtext font-medium uppercase tracking-widest text-sm">
            Everything you need to know
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 md:px-8 mb-12">
          {faqs.map((faq) => (
            <FAQAccordion key={faq.id} item={faq} />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowContactModal(true)}
            className="text-gray-500 hover:text-kina-blue text-sm font-medium flex items-center justify-center gap-2 mx-auto transition-colors group"
          >
            <MessageCircleQuestion size={16} className="group-hover:scale-110 transition-transform"/>
            Can't find your answer? Contact us
          </button>
        </div>
      </div>

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </section>
  );
};
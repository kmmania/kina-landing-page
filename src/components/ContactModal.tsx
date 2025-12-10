import React, { useState } from 'react';
import { X, Mail, Send, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('NAME'),
      email: formData.get('EMAIL'),
      message: formData.get('MESSAGE')
    };
    
    try {
      // Appel à la fonction serverless (api/contact.js)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later.');
      }

      setFormStatus('success');
      
      // Fermeture automatique après succès
      setTimeout(() => {
        onClose();
        setTimeout(() => setFormStatus('idle'), 300);
      }, 2500);

    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setErrorMessage('Unable to send message. Please try again or email us directly.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in text-left">
      <div className="bg-white rounded-2xl max-w-md w-full relative shadow-2xl overflow-hidden animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 z-10 transition-colors"
          type="button"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-kina-blue/10 text-kina-blue rounded-full flex items-center justify-center">
              <Mail size={20} />
            </div>
            <h3 className="text-xl font-bold text-kina-text">Contact Support</h3>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex p-3 bg-green-100 text-green-600 rounded-full mb-4 animate-bounce">
                <Send size={24} />
              </div>
              <p className="font-bold text-gray-800 text-lg">Message Sent!</p>
              <p className="text-sm text-gray-500 mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {formStatus === 'error' && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Name</label>
                <input 
                  type="text" 
                  name="NAME"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all" 
                  required 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                <input 
                  type="email" 
                  name="EMAIL"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all" 
                  required 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Message</label>
                <textarea 
                  name="MESSAGE"
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all resize-none" 
                  required 
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <Button type="submit" variant="secondary" fullWidth disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
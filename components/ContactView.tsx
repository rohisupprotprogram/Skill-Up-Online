
import React, { useState } from 'react';
import { CONTACT, BANK_DETAILS } from '../constants';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions? We're here to help you skill up. Reach out to our dedicated support team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Us</p>
                      <p className="text-slate-600">{CONTACT.email}</p>
                      <p className="text-xs text-slate-400 mt-1">Our team typically responds within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.315 0-4.195 1.88-4.195 4.195 0 .702.181 1.359.499 1.933l-.523 1.914 1.96-.514c.548.3 1.173.473 1.84.473 2.315 0 4.195-1.88 4.195-4.195s-1.88-4.195-4.195-4.195zm3.178 5.86c-.127.35-.635.666-1.018.724-.316.046-.732.072-1.161-.067-.27-.087-.58-.198-.985-.373-1.722-.743-2.852-2.483-2.937-2.6-.086-.117-.696-.927-.696-1.768 0-.84.441-1.25.598-1.42.158-.17.35-.213.466-.213.117 0 .234.001.334.005.107.004.25-.04.39.297.144.35.492 1.2.534 1.285.043.085.07.185.014.3-.056.115-.084.185-.17.285-.085.1-.177.223-.253.298-.087.086-.178.18-.077.353.101.173.448.74.961 1.2.66.589 1.215.772 1.388.857.173.086.273.071.374-.043.101-.115.438-.513.555-.685.117-.17.234-.142.39-.085.158.057.994.469 1.165.555.171.085.285.128.327.2.042.07.042.41-.085.759z" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">WhatsApp Support</p>
                      <p className="text-slate-600">{CONTACT.whatsapp}</p>
                      <p className="text-xs text-slate-400 mt-1">Available Mon-Fri, 9am - 6pm (PKT).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Visit Our Website</p>
                      <p className="text-slate-600">{CONTACT.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Support</h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Official Bank Account</p>
                  <div className="space-y-3">
                    <p className="text-lg font-bold text-slate-900">{BANK_DETAILS.accountTitle}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="block text-slate-400">Bank</span>
                        <span className="font-medium">{BANK_DETAILS.bankName}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400">IBAN</span>
                        <span className="font-mono text-xs break-all text-indigo-600">{BANK_DETAILS.iban}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-indigo-600 p-8 text-white">
                <h3 className="text-2xl font-bold">Send us a Message</h3>
                <p className="text-indigo-100 opacity-80">We'd love to hear from you. Fill out the form below.</p>
              </div>
              <div className="p-8">
                {isSent ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for reaching out. We'll get back to you shortly.</p>
                    <button onClick={() => setIsSent(false)} className="px-6 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Your Name</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="Full Name" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="email@example.com" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Subject</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="What is this about?" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Message</label>
                      <textarea 
                        required 
                        rows={4} 
                        placeholder="Your message here..." 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>
                    <button 
                      disabled={isSubmitting} 
                      type="submit" 
                      className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-200 h-[400px] rounded-3xl flex items-center justify-center text-slate-400 overflow-hidden relative border border-slate-300">
              <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i4796!3i3020!2m3!1e0!2sm!3i605417931!3m8!2sen!3spk!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!5f2!23i1301875?key=YOUR_API_KEY')] bg-cover bg-center"></div>
              <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Skill Up Online (Private) Limited</h4>
                <p className="text-slate-600">Registered Office: Islamabad, Pakistan</p>
                <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">Regional Service Center</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

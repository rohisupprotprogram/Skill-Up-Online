
import React, { useState, useEffect } from 'react';
import { COURSES, CONTACT, BANK_DETAILS } from './constants';
import { Course } from './types';
import { EnrollmentModal } from './components/EnrollmentModal';
import { AICourseAdvisor } from './components/AICourseAdvisor';
import { ContactView } from './components/ContactView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';

type View = 'home' | 'contact' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const stats = [
    { label: 'Students Enrolled', value: '5,000+' },
    { label: 'Live Sessions', value: '250+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Avg Rating', value: '4.9/5' },
  ];

  const navigateToHomeSection = (sectionId: string) => {
    setCurrentView('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 border-b border-slate-200 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button onClick={() => { setCurrentView('home'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 hover:opacity-80 transition z-50">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">SkillUp<span className="text-indigo-600">Online</span></span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigateToHomeSection('courses')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">Courses</button>
              <button onClick={() => navigateToHomeSection('about')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">About Us</button>
              <button onClick={() => setCurrentView('contact')} className={`text-sm font-medium transition ${currentView === 'contact' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Contact</button>
              <button onClick={() => setCurrentView('privacy')} className={`text-sm font-medium transition ${currentView === 'privacy' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>Privacy</button>
            </div>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="hidden sm:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-100">
                Join Now
              </a>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={toggleMobileMenu} 
                className="md:hidden p-2 text-slate-600 hover:text-indigo-600 focus:outline-none z-50 bg-white rounded-lg shadow-sm"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="flex flex-col h-full pt-24 px-6 gap-6 overflow-y-auto">
            <button onClick={() => navigateToHomeSection('courses')} className="text-2xl font-bold text-slate-800 text-left hover:text-indigo-600 transition flex items-center justify-between py-2 border-b border-slate-50">
              Courses
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            <button onClick={() => navigateToHomeSection('about')} className="text-2xl font-bold text-slate-800 text-left hover:text-indigo-600 transition flex items-center justify-between py-2 border-b border-slate-50">
              About Us
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            <button onClick={() => { setCurrentView('contact'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold text-left transition flex items-center justify-between py-2 border-b border-slate-50 ${currentView === 'contact' ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>
              Contact
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            <button onClick={() => { setCurrentView('privacy'); setIsMobileMenuOpen(false); }} className={`text-2xl font-bold text-left transition flex items-center justify-between py-2 border-b border-slate-50 ${currentView === 'privacy' ? 'text-indigo-600' : 'text-slate-800 hover:text-indigo-600'}`}>
              Privacy Policy
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            
            <div className="mt-auto pb-12 space-y-4">
              <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative pt-12 md:pt-20 pb-32 overflow-hidden bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-6">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                      Admissions Open for New Batch
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                      Skill Up for the <span className="text-indigo-600">Digital Future</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                      Join our elite 12-week weekend certification programs. Live interactive sessions via Google Meet led by industry veterans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button onClick={() => navigateToHomeSection('courses')} className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                        Explore Courses
                      </button>
                      <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-2.315 0-4.195 1.88-4.195 4.195 0 .702.181 1.359.499 1.933l-.523 1.914 1.96-.514c.548.3 1.173.473 1.84.473 2.315 0 4.195-1.88 4.195-4.195s-1.88-4.195-4.195-4.195zm3.178 5.86c-.127.35-.635.666-1.018.724-.316.046-.732.072-1.161-.067-.27-.087-.58-.198-.985-.373-1.722-.743-2.852-2.483-2.937-2.6-.086-.117-.696-.927-.696-1.768 0-.84.441-1.25.598-1.42.158-.17.35-.213.466-.213.117 0 .234.001.334.005.107.004.25-.04.39.297.144.35.492 1.2.534 1.285.043.085.07.185.014.3-.056.115-.084.185-.17.285-.085.1-.177.223-.253.298-.087.086-.178.18-.077.353.101.173.448.74.961 1.2.66.589 1.215.772 1.388.857.173.086.273.071.374-.043.101-.115.438-.513.555-.685.117-.17.234-.142.39-.085.158.057.994.469 1.165.555.171.085.285.128.327.2.042.07.042.41-.085.759z" /></svg>
                        WhatsApp Support
                      </a>
                    </div>
                  </div>
                  <div className="relative mt-12 lg:mt-0">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Students learning online" className="w-full object-cover aspect-[4/3]" />
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">{stat.value}</p>
                      <p className="text-[10px] sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Professional Programs</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Skill Up Online provides specialized weekend learning designed for working professionals and students seeking practical excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {COURSES.map((course) => (
                    <div key={course.id} className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                          {course.fee}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="text-2xl mb-3">{course.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{course.title}</h3>
                        <p className="text-sm text-slate-600 mb-6 flex-grow">{course.description}</p>
                        <button onClick={() => setSelectedCourse(course)} className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition shadow-sm">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        SECP Registered: Skill Up Online (Private) Limited
                      </div>
                      <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Dedicated to <span className="text-indigo-600">Practical</span>, Career-Focused Training
                      </h2>
                      <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-4">
                        <p>Skill Up Online (Private) Limited is a SECP-registered e-learning provider dedicated to practical, career-focused training. We deliver short online courses, live workshops, and certifications in areas such as IT, business, finance, and professional skills.</p>
                        <p>Using modern digital tools and AI-driven assessment, our platform makes learning flexible, measurable, and directly applicable to work. We aim to help professionals and organizations upskill quickly and confidently—anytime, anywhere.</p>
                      </div>
                    </div>
                    <div className="lg:col-span-5">
                       <div className="bg-indigo-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                          <p className="text-indigo-100 mb-8 leading-relaxed">To become the primary engine for workforce upskilling in the digital age, providing accessible and high-impact education to every corner of the globe.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'privacy' && <PrivacyPolicyView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 hover:opacity-80 transition mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-800">SkillUp<span className="text-indigo-600">Online</span></span>
              </button>
              <p className="text-slate-500 max-w-sm mb-6">SECP-registered e-learning provider dedicated to practical, career-focused training and professional upskilling.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><button onClick={() => navigateToHomeSection('courses')} className="hover:text-indigo-600 transition">Courses</button></li>
                <li><button onClick={() => navigateToHomeSection('about')} className="hover:text-indigo-600 transition">About Us</button></li>
                <li><button onClick={() => setCurrentView('contact')} className="hover:text-indigo-600 transition">Contact Us</button></li>
                <li><button onClick={() => setCurrentView('privacy')} className="hover:text-indigo-600 transition">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>{CONTACT.email}</li>
                <li>{CONTACT.whatsapp}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-100">
            <p className="text-slate-400 text-sm">© 2024 Skill Up Online (Private) Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Advisor Floating Widget */}
      <AICourseAdvisor />

      {/* Enrollment Modal */}
      {selectedCourse && (
        <EnrollmentModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
};

export default App;

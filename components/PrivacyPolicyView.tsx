
import React from 'react';
import { CONTACT } from '../constants';

export const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Your trust is our most important asset. Learn how we protect and manage your personal data.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-500 italic mb-12">Last Updated: May 2024</p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">1</span>
                  Information We Collect
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  When you register for our courses at Skill Up Online (Private) Limited, we collect personal information essential for your academic journey. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                  <li><strong>Identity Data:</strong> Full Name and a photograph for verification.</li>
                  <li><strong>Contact Data:</strong> Email Address, Phone Number, and Residential Address.</li>
                  <li><strong>Professional Data:</strong> Your CV/Resume to understand your background and tailor support.</li>
                  <li><strong>Academic Data:</strong> Course progress, attendance records, and project submissions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">2</span>
                  How We Use Your Data
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We process your data primarily to fulfill our educational commitment to you. Specifically, your data is used to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                  <li>Manage your course enrollment and verify identity.</li>
                  <li>Send Google Meet links and session schedules.</li>
                  <li>Verify payment transactions for seat confirmation.</li>
                  <li>Issue official Skill Up Online certificates upon completion.</li>
                  <li>Provide personalized feedback through our AI Skill Advisor.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">3</span>
                  Data Security & Protection
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-slate-600 leading-relaxed m-0">
                    We implement industry-standard security measures to ensure your data remains confidential. Your documents (CV and Photo) are stored on encrypted servers. Access is restricted to authorized administrative personnel only. We do not sell, trade, or share your data with third-party marketing agencies.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">4</span>
                  Third-Party Platforms
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Our services utilize trusted third-party tools to deliver education:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                  <li><strong>Google Meet:</strong> For live video conferencing sessions.</li>
                  <li><strong>WhatsApp:</strong> For direct student support and announcements.</li>
                  <li><strong>Google Cloud:</strong> For secure data hosting and processing.</li>
                </ul>
                <p className="text-sm text-slate-400 mt-4">Note: Your use of these platforms is also subject to their respective privacy terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">5</span>
                  Data Retention & Rights
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We retain student records for up to 2 years after graduation to assist with employer verification requests. You have the right to request a copy of your data or its permanent deletion at any time after course completion by contacting us at <span className="text-indigo-600 font-bold">{CONTACT.email}</span>.
                </p>
              </section>
            </div>

            <div className="mt-20 pt-12 border-t border-slate-100 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Questions about our policy?</h3>
              <p className="text-slate-600 mb-8">Reach out to our Data Protection Officer.</p>
              <div className="flex justify-center gap-4">
                <a href={`mailto:${CONTACT.email}`} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition">Email Support</a>
                <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} className="px-6 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

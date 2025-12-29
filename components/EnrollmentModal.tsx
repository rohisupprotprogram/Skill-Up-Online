
import React, { useState } from 'react';
import { Course, EnrollmentData } from '../types';
import { BANK_DETAILS, CONTACT } from '../constants';

interface Props {
  course: Course;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<Props> = ({ course, onClose }) => {
  const [formData, setFormData] = useState<EnrollmentData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    courseId: course.id,
    photo: null,
    cv: null,
    paymentConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Registration Received!</h3>
          <p className="text-slate-600 mb-6">Thank you, {formData.fullName}. Please complete your payment of <b>PKR 1,000</b> to secure your seat.</p>
          <div className="bg-slate-50 p-4 rounded-xl text-left mb-6 border border-slate-200">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Bank Info</p>
            <p className="text-sm font-bold text-slate-800">{BANK_DETAILS.bankName}</p>
            <p className="text-sm text-slate-600">Title: {BANK_DETAILS.accountTitle}</p>
            <p className="text-sm text-slate-600 break-all font-mono mt-1">{BANK_DETAILS.iban}</p>
          </div>
          <button onClick={onClose} className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden my-8">
        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Enroll: {course.title}</h3>
            <p className="text-indigo-100 text-sm">Fill out the form to register for the 12-week program.</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none" 
                onChange={(e) => setFormData({...formData, fullName: e.target.value})} value={formData.fullName} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone (with Country Code)</label>
              <input required type="tel" placeholder="+92 3XX XXXXXXX" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} value={formData.phone} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Residential Address</label>
              <input required type="text" placeholder="Your current city/address" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition outline-none"
                onChange={(e) => setFormData({...formData, address: e.target.value})} value={formData.address} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Upload Photo</label>
              <input required type="file" accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Upload CV (PDF/Doc)</label>
              <input required type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => setFormData({...formData, cv: e.target.files?.[0] || null})} />
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 space-y-3">
            <h4 className="font-bold text-indigo-900 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              Payment Terms & Fee
            </h4>
            <p className="text-sm text-indigo-800">
              The course fee is a one-time payment of <b>PKR 1,000</b> for the entire 12-week program. All sessions are live via Google Meet.
            </p>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                checked={formData.paymentConsent} onChange={(e) => setFormData({...formData, paymentConsent: e.target.checked})} />
              <span className="text-xs text-slate-600 group-hover:text-slate-900 transition">
                I agree to pay the course fee of PKR 1,000 to the bank info provided after submission. I understand that my seat will only be confirmed upon receipt of payment.
              </span>
            </label>
          </div>

          <button disabled={isSubmitting} type="submit" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
            {isSubmitting ? (
              <span className="animate-pulse">Processing Registration...</span>
            ) : (
              <>Register Now for {course.fee}</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

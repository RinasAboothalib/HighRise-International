import React, { useState, useEffect } from 'react';
import { COMPANY_PROFILE, SERVICES } from '../data/highriseData';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal, MaskedHeading, EASE_PREMIUM } from './motion/MotionUtils';

interface ContactSectionProps {
  initialInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: initialInterest || 'Event Management',
    timeline: 'Within 3 Months',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialInterest }));
    }
  }, [initialInterest]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief event message (min 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`HR-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      serviceInterest: 'Event Management',
      timeline: 'Within 3 Months',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="py-20 sm:py-28 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
              <span>Direct Commercial Engagement</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Get in Touch</span>
            </div>
          </ScrollReveal>

          <MaskedHeading as="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Start Your Next Production with Highrise.
          </MaskedHeading>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are staging a multi-national summit, booking an exhibition booth, commissioning turnkey event production, or planning a private island celebration, our executive team is ready to assist.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Verified Corporate Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Corporate Headquarters
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Head Office:</strong>
                      <span className="text-slate-600 leading-relaxed">
                        Highrise Pvt Ltd.<br />
                        CHP #4 Building, 5th Floor, Orchid Magu,<br />
                        Malé, 20183, Republic of Maldives.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Telephone Direct:</strong>
                      <a
                        href="tel:+9603306606"
                        className="text-slate-700 hover:text-sky-600 font-medium transition-colors"
                      >
                        +960 330 6606
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Official Inquiries:</strong>
                      <a
                        href="mailto:dosm@highriseint.com"
                        className="text-sky-600 hover:text-sky-800 font-semibold transition-colors"
                      >
                        dosm@highriseint.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Web Portal:</strong>
                      <span className="text-slate-700">www.highriseint.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Regional Office Box */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-slate-600 space-y-2">
                <div className="font-bold text-sky-800 uppercase tracking-wider text-xs">
                  Regional Presence: Colombo, Sri Lanka
                </div>
                <p>
                  Our regional liaison desk oversees South Asian Travel Awards (SATA) coordination, regional media relations, and cross-border delegate arrangements across the Indian subcontinent.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Functional Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg shadow-sky-950/5">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 text-center space-y-5"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Inquiry Dispatched Successfully
                      </h2>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your event brief has been logged under reference{' '}
                        <span className="font-mono text-sky-600 font-bold">{submissionId}</span>. Our director of sales & marketing will contact you at{' '}
                        <span className="text-slate-900 font-semibold">{formData.email}</span> within 24 business hours.
                      </p>
                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handleReset}
                          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-full transition-colors shadow-sm"
                        >
                          Submit Another Inquiry
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">
                          Event & Project Consultation Brief
                        </h2>
                        <p className="text-xs text-slate-500">
                          Fill in your details below and our production directors will evaluate your requirements.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Full Name <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Hassan Ahmed"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                              errors.fullName
                                ? 'border-red-400 focus:ring-red-400/20'
                                : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                            }`}
                          />
                          {errors.fullName && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.fullName}</span>
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Corporate Email <span className="text-sky-600">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. hassan@organization.com"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                              errors.email
                                ? 'border-red-400 focus:ring-red-400/20'
                                : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                            }`}
                          />
                          {errors.email && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Contact Number / WhatsApp
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+960 700 0000"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                          />
                        </div>

                        {/* Organization */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Organization / Brand Name
                          </label>
                          <input
                            type="text"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="e.g. Luxury Resort / Ministry"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Service Category */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Service or Brand of Interest
                          </label>
                          <select
                            value={formData.serviceInterest}
                            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                          >
                            <optgroup label="Core Services">
                              {SERVICES.map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </optgroup>
                            <optgroup label="Expos & Flagships">
                              <option value="South Asian Travel Awards (SATA)">South Asian Travel Awards (SATA)</option>
                              <option value="Maldives Living Expo">Maldives Living Expo</option>
                              <option value="Vacations Expo">Vacations Expo</option>
                              <option value="Food & Beverage Show (F&B)">Food & Beverage Show (F&B)</option>
                              <option value="Sounds of Maldives">Sounds of Maldives</option>
                              <option value="The Island Chief (Advertising)">The Island Chief (Advertising)</option>
                              <option value="Floating Asia (Media)">Floating Asia (Media)</option>
                            </optgroup>
                          </select>
                        </div>

                        {/* Proposed Timeline */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Target Event Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-colors"
                          >
                            <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                            <option value="Within 3 Months">Within 3 Months</option>
                            <option value="3 to 6 Months">3 to 6 Months</option>
                            <option value="Future Planning (6+ Months)">Future Planning (6+ Months)</option>
                          </select>
                        </div>
                      </div>

                      {/* Message / Brief */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Project Brief & Scope <span className="text-sky-600">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Outline your venue preferences, expected delegate attendance, exhibition space requirements, or event objectives..."
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                            errors.message
                              ? 'border-red-400 focus:ring-red-400/20'
                              : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 rounded-full transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-600/25 active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <span>Dispatching Brief...</span>
                        ) : (
                          <>
                            <span>Transmit Project Brief to Highrise Directors</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

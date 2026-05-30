import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ShieldAlert, Heart, RefreshCw } from 'lucide-react';

interface ContactProps {
  theme: 'dark' | 'light';
  preSelectedPlan?: string;
}

export default function Contact({ theme, preSelectedPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    message: preSelectedPlan ? `Hi, I am interested in exploring the CheatLock ${preSelectedPlan} Plan...` : '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync prop changes if user clicks a pricing card tier
  React.useEffect(() => {
    if (preSelectedPlan) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I am interested in exploring the CheatLock ${preSelectedPlan} Plan and establishing a secure evaluation trial.`,
      }));
    }
  }, [preSelectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Name or representative name is required.';
    if (!formData.institution.trim()) tempErrors.institution = 'Institution or school name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'E-mail address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid e-mail structure.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please input details explaining your requirements.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate standard SaaS backend ingestion latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', institution: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#050816] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.03)_0%,_transparent_65%)]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Text details */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-32">
            <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
              Inquire Integration Setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Request a Sandbox
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Are you an exam controller, university provost, or IT administrator? Speak with our technical integration engineering team to schedule custom deployments, pilot tests, and LMS setups.
            </p>

            {/* Direct contact info bullets */}
            <div className="space-y-4 pt-4 border-t border-slate-500/10">
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>DIRECT PHONE support: (880) 171-CHEAT-LOCK</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span>INQUIRY E-MAIL: aitijya03@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>OFFICE HQ: Metropolitan University Campus, Sylhet</span>
              </div>
            </div>

            {/* Aesthetic badge */}
            <div className={`p-4 rounded-2xl border text-xs flex items-center space-x-3.5 ${
              theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <Heart className="w-5 h-5 text-red-500 animate-pulse shrink-0" />
              <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                Each license supports fully audited, secure environments designed to safeguard student equity.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl border p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-slate-950/40 border-slate-850'
                : 'bg-white border-slate-200'
            }`}>
              <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Pre-Selected Plan Highlight Badge */}
                    {preSelectedPlan && (
                      <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold rounded-xl flex justify-between items-center">
                        <span>Selected Intended Tier: <strong>{preSelectedPlan} Plan</strong></span>
                        <span className="text-[9px] font-mono bg-blue-500/20 px-2 py-0.5 rounded uppercase font-bold">Configuring</span>
                      </div>
                    )}

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs uppercase tracking-widest font-semibold font-mono ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Aitijya Sarker Atibo"
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border font-sans font-medium transition-all outline-none ${
                          errors.name
                            ? 'border-red-500 bg-red-500/5 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                            ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 focus:bg-slate-900 text-white'
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs font-mono flex items-center space-x-1.5 pt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>

                    {/* Institution input */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs uppercase tracking-widest font-semibold font-mono ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Institution / University Name
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="e.g. Metropolitan University, Sylhet"
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border font-sans font-medium transition-all outline-none ${
                          errors.institution
                            ? 'border-red-500 bg-red-500/5 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                            ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 focus:bg-slate-900 text-white'
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900'
                        }`}
                      />
                      {errors.institution && (
                        <span className="text-red-500 text-xs font-mono flex items-center space-x-1.5 pt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>{errors.institution}</span>
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs uppercase tracking-widest font-semibold font-mono ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Inquiry E-mail Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rep@university.edu"
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border font-sans font-medium transition-all outline-none ${
                          errors.email
                            ? 'border-red-500 bg-red-500/5 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                            ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 focus:bg-slate-900 text-white'
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-mono flex items-center space-x-1.5 pt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>

                    {/* Message description box */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs uppercase tracking-widest font-semibold font-mono ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Explain your Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Detail volume of exams/mo, integration dependencies, or timeline..."
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border font-sans font-medium transition-all outline-none resize-none ${
                          errors.message
                            ? 'border-red-500 bg-red-500/5 focus:ring-1 focus:ring-red-500'
                            : theme === 'dark'
                            ? 'bg-slate-900/50 border-slate-800 focus:border-blue-500 focus:bg-slate-900 text-white'
                            : 'bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs font-mono flex items-center space-x-1.5 pt-0.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg hover:opacity-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 text-white animate-spin" />
                            <span>Ingesting request onto ledger...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-white" />
                            <span>Dispatch Security Query</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center space-y-5 flex flex-col items-center justify-center min-h-[400px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-display font-extrabold">Query Successfully Dispatched</h3>
                      <p className={`text-sm leading-relaxed max-w-md mx-auto ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-650'
                      }`}>
                        Thank you for reaching out to Team NextZen. Your inquiry has been processed and routed to our regional academic compliance proctors. Expect email follow-up within 12 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-500 hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                    >
                      ← Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ArrowRight, User, Phone, CheckCircle2, Loader2, BookOpen } from 'lucide-react';
import { COURSES } from '../data/courses.js';

const initialForm = { name: '', phone: '', course: '' };

export default function CTASection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  // Interactive background: gradient blob follows the pointer within the section.
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current.style.setProperty('--mx', `${x}%`);
    sectionRef.current.style.setProperty('--my', `${y}%`);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Ismingizni kiriting";
    if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim())) next.phone = "To'g'ri telefon raqam kiriting";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulate submission round-trip
    window.setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus('idle');
    setErrors({});
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-white py-24 text-slate-900">
      {/* Interactive Clean Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Subtle Light Glows */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xl transition-transform duration-500 hover:scale-[1.01]"
          style={{ '--mx': '50%', '--my': '50%' }}
        >
          {/* Interactive pointer-following subtle hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(450px circle at var(--mx) var(--my), rgba(56, 189, 248, 0.12), transparent 70%)',
            }}
          />

          <div className="relative p-8 sm:p-12 lg:p-16">
            {/* Header content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200/60 px-4 py-1.5 text-xs font-bold text-sky-600 shadow-sm">
                <Rocket size={14} strokeWidth={2.5} />
                <span>Hoziroq ro'yxatdan o'ting</span>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Kelajagingizni biz bilan quring!
              </h3>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                Shams Academy zamonaviy kasblar va fundamental fanlar bo'yicha professional ta'lim oling. Orzularingiz sari ilk qadamni tashlang.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
            >
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="cta-name" className="sr-only">
                  Ismingiz
                </label>
                <div className="relative group">
                  <User size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-600 transition-colors" />
                  <input
                    id="cta-name"
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`w-full rounded-2xl border bg-slate-50/50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-sm backdrop-blur-md transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 hover:border-slate-300 ${
                      errors.name ? 'border-red-400' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.name && <p className="mt-1.5 pl-2 text-xs font-semibold text-red-600">{errors.name}</p>}
              </div>

              {/* Phone Input */}
              <div className="flex flex-col">
                <label htmlFor="cta-phone" className="sr-only">
                  Telefon raqam
                </label>
                <div className="relative group">
                  <Phone size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-600 transition-colors" />
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`w-full rounded-2xl border bg-slate-50/50 py-4 pl-12 pr-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-sm backdrop-blur-md transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 hover:border-slate-300 ${
                      errors.phone ? 'border-red-400' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.phone && <p className="mt-1.5 pl-2 text-xs font-semibold text-red-600">{errors.phone}</p>}
              </div>

              {/* Course Select */}
              <div className="flex flex-col">
                <label htmlFor="cta-course" className="sr-only">
                  Kursni tanlang
                </label>
                <div className="relative group">
                  <BookOpen size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-600 transition-colors" />
                  <select
                    id="cta-course"
                    value={form.course}
                    onChange={handleChange('course')}
                    className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-10 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 hover:border-slate-300 cursor-pointer"
                  >
                    <option value="">Kursni tanlang</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-start">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <span>Yuborish</span>
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Notification Message */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  role="status"
                  className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-sky-50 border border-sky-200 px-6 py-4 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md"
                >
                  <span className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" strokeWidth={2.5} />
                    <span>So'rovingiz muvaffaqiyatli qabul qilindi! Tez orada mutaxassislarimiz siz bilan bog'lanishadi.</span>
                  </span>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="shrink-0 rounded-xl bg-sky-600/10 px-4 py-2 text-xs font-bold text-sky-700 transition-colors hover:bg-sky-600/20 cursor-pointer"
                  >
                    Yana yuborish
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
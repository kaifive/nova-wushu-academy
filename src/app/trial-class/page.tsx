'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Send, CheckCircle, XCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';

export default function TrialClass() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: null as Date | null,
        details: '',
        comments: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Restrict available dates to Mon/Wed/Fri/Sat only
    const isTrialDay = (date: Date) => {
        const day = date.getDay(); // 0=Sun, 1=Mon, ... 6=Sat
        return day === 1 || day === 3 || day === 5 || day === 6;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const result = await emailjs.send(
                'service_e7luqtg', // ⚙️ Your Service ID
                'template_w52s1rd', // ⚙️ Your Template ID
                {
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone || 'Not provided',
                  date: formData.date
                    ? formData.date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Not selected',
                  time: formData.date
                    ? (() => {
                        const day = formData.date.getDay();
                        if (day === 1 || day === 3 || day === 5) return '5:00 PM – 6:00 PM';
                        if (day === 6) return '10:00 AM – 11:00 AM';
                        return 'Unavailable';
                      })()
                    : 'Not selected',
                  details: formData.details,
                  comments: formData.comments,
                },
                'ejDRNE-e5fuwG5S0_' // ⚙️ Your Public Key
              );
              

            if (result.status === 200) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: null,
                    details: '',
                    comments: '',
                });
                setTimeout(() => setStatus('idle'), 4000);
            } else throw new Error('Unexpected response from EmailJS');
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-gray-900 mb-6"
                    >
                        Trial Class Sign-Up
                    </motion.h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        To sign up for trial classes, please select a day from the calendar then fill out the form
                        with the required information.
                    </p>
                    <p className="mt-6 text-gray-700">
                        <strong>Available Times:</strong>
                        <br />Monday, Wednesday, and Friday – 5:00 PM to 6:00 PM
                        <br />Saturday – 10:00 AM to 11:00 AM
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                        >
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent!</h3>
                            <p className="text-green-600">
                                Thank you for your interest in Nova Wushu Academy! We’ll reach out to confirm your trial class soon.
                            </p>
                        </motion.div>
                    ) : status === 'error' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
                        >
                            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-red-800 mb-2">Error Sending Request</h3>
                            <p className="text-red-600">
                                Please try again later or email us directly at contact@novawushuacademy.com.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Date Picker */}
                                    <div className="flex flex-col">
                                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>Choose Date *</span>
                                        </label>
                                        <DatePicker
                                            selected={formData.date}
                                            onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
                                            filterDate={isTrialDay}
                                            minDate={new Date()}
                                            placeholderText="Select a trial date"
                                            required
                                            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                        />
                                    </div>

                                    {/* Time Display */}
                                    <div className="flex flex-col">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                                        <div className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 flex items-center">
                                            {formData.date
                                                ? (() => {
                                                    const day = formData.date.getDay();
                                                    if (day === 1 || day === 3 || day === 5) return "5:00–6:00 PM";
                                                    if (day === 6) return "10:00-11:00 AM";
                                                    return "";
                                                })()
                                                : "Select a date"}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Details *</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Include the age of the participating individual, and any relevant info"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Other Comments</label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Any additional questions or concerns?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'loading'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-60"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Submit Request</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    )}
                </div>
            </section>
        </div>
    );
}

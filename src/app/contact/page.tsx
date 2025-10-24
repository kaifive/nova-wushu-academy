'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const INTEREST_OPTIONS = {
    "membership": "Membership Information",
    "competition": "Competition Training",
    "private-lessons": "Private Lessons",
    "other": "Other",
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'membership',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const result = await emailjs.send(
                'service_e7luqtg', // ⚙️ Your Service ID
                'template_usk1xjk', // ⚙️ Your Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || "None Provided",
                    interest: INTEREST_OPTIONS[
                        formData.interest as keyof typeof INTEREST_OPTIONS
                    ],
                    message: formData.message,
                },
                'ejDRNE-e5fuwG5S0_' // ⚙️ Your Public Key
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    interest: 'membership',
                });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                throw new Error('Unexpected response from EmailJS');
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            details: '(703) 953-3115',
            description: 'Call us for immediate assistance',
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'contact@novawushuacademy.com',
            description: 'Send us an email anytime',
        },
        {
            icon: MapPin,
            title: 'Location',
            details: '14088 G Sullyfield Circle, Chantilly, VA 20151',
            description: 'Serving the DMV area',
        },
        {
            icon: Clock,
            title: 'Hours',
            details: 'Mon-Fri: 4:30PM-8:00PM | Sat: 10:00AM-3:00PM',
            description: 'Come by to watch practice',
        },
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to start your martial arts journey? Get in touch with us today!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We&apos;re here to help you start your martial arts journey. Whether you&apos;re a
                                complete beginner or looking to take your skills to the next level, we have
                                programs designed just for you.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, i) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                                            <p className="text-primary font-medium mb-1">{info.details}</p>
                                            <p className="text-gray-600 text-sm">{info.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">
                                        Thank you for contacting us. We&apos;ll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
                                >
                                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-red-800 mb-2">Error Sending Message</h3>
                                    <p className="text-red-600">
                                        Something went wrong. Please try again later or email us directly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
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
                                                onChange={handleInputChange}
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
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                I&apos;m Interested In
                                            </label>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                            >
                                                {Object.entries(INTEREST_OPTIONS).map(([value, label]) => (
                                                    <option key={value} value={value}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
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
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

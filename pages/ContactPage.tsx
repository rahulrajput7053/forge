import React, { useState } from 'react';
// Fix: Corrected import path for type definition.
import type { Customer } from '../types';

interface ContactPageProps {
    onAddCustomer: (customer: Pick<Customer, 'name' | 'email'>) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onAddCustomer }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && email.trim() && message.trim()) {
            onAddCustomer({ name, email });
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-text-primary mb-2 text-center">Contact Us</h1>
                <p className="text-text-secondary mb-8 text-center">We'd love to hear from you. Fill out the form below.</p>
                {submitted ? (
                    <div className="bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded-lg relative text-center" role="alert">
                        <strong className="font-bold">Thank you!</strong>
                        <span className="block sm:inline"> Your message has been sent.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full bg-component-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full bg-component-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="mt-1 block w-full bg-component-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
                                disabled={!name || !email || !message}
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactPage;

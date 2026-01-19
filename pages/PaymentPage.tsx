
import React, { useState } from 'react';

interface PaymentPageProps {
    onPaymentSuccess: () => void;
    total: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onPaymentSuccess, total }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            onPaymentSuccess();
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-lg mx-auto bg-component-bg border border-border-color p-10 shadow-2xl">
                <h1 className="text-4xl font-black text-text-primary mb-4 text-center uppercase tracking-tighter">Secure Checkout</h1>
                <p className="text-text-secondary mb-10 text-center text-sm uppercase tracking-widest">
                    Amount Payable: <span className="font-black text-accent ml-2">₹{total.toLocaleString()}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <label htmlFor="card-number" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Card Number</label>
                        <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" required className="w-full bg-black border border-border-color py-4 px-4 text-white focus:outline-none focus:border-accent transition-colors tracking-widest" />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="expiry-date" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Expiry</label>
                            <input type="text" id="expiry-date" placeholder="MM / YY" required className="w-full bg-black border border-border-color py-4 px-4 text-white focus:outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="cvc" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">CVC</label>
                            <input type="password" id="cvc" placeholder="***" required className="w-full bg-black border border-border-color py-4 px-4 text-white focus:outline-none focus:border-accent transition-colors" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="name" className="block text-[10px] font-black text-text-secondary uppercase tracking-widest">Cardholder Name</label>
                        <input type="text" id="name" placeholder="YOUR NAME" required className="w-full bg-black border border-border-color py-4 px-4 text-white focus:outline-none focus:border-accent transition-colors uppercase" />
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-white text-black font-black py-5 uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white disabled:opacity-50"
                        >
                            {isProcessing ? 'Processing Transaction...' : `Pay ₹${total.toLocaleString()}`}
                        </button>
                        <p className="text-[9px] text-text-secondary text-center mt-6 uppercase tracking-[0.2em] opacity-50">
                            Encrypted & Secure 256-bit SSL Connection
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;

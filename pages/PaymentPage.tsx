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
        // Simulate payment processing
        setTimeout(() => {
            onPaymentSuccess();
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-lg mx-auto bg-component-bg border border-border-color rounded-lg p-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2 text-center">Checkout</h1>
                <p className="text-text-secondary mb-8 text-center">Total: <span className="font-bold text-accent">${total.toFixed(2)}</span></p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-text-secondary">Card Number</label>
                        <input type="text" id="card-number" placeholder="**** **** **** ****" required className="mt-1 block w-full bg-base-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="expiry-date" className="block text-sm font-medium text-text-secondary">Expiry Date</label>
                            <input type="text" id="expiry-date" placeholder="MM / YY" required className="mt-1 block w-full bg-base-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
                        </div>
                        <div>
                            <label htmlFor="cvc" className="block text-sm font-medium text-text-secondary">CVC</label>
                            <input type="text" id="cvc" placeholder="***" required className="mt-1 block w-full bg-base-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name on Card</label>
                        <input type="text" id="name" placeholder="John Doe" required className="mt-1 block w-full bg-base-bg border border-border-color rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-accent focus:border-accent" />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
                        >
                            {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;

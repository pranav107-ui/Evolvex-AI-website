import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-[#0b1220]">{question}</span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-[#6C4CF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-[#475467] leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "What is Evolvex?",
            answer: "Evolvex is an advanced artificial intelligence platform designed to help businesses automate workflows, analyze data, and enhance customer experiences through state-of-the-art machine learning models."
        },
        {
            question: "How can I integrate Evolvex into my existing software?",
            answer: "We provide a comprehensive API and SDKs for major programming languages (Python, JavaScript, Go) that allow for seamless integration. Our documentation covers everything from authentication to complex data pipeline setups."
        },
        {
            question: "Is my data secure with Evolvex?",
            answer: "Absolutely. We adhere to strict security protocols including SOC 2 Type II compliance, end-to-end encryption for data in transit and at rest, and regular third-party security audits."
        },
        {
            question: "Do you offer enterprise support?",
            answer: "Yes, our Enterprise plan includes 24/7 dedicated support, a designated technical account manager, and custom SLA options to ensure your business continuity."
        },
        {
            question: "Can I try Evolvex before purchasing?",
            answer: "We offer a 14-day free trial on our Pro plan, allowing you to explore our full suite of features. For Enterprise needs, we can arrange a custom proof-of-concept pilot."
        },
        {
            question: "What pricing plans utilize available?",
            answer: "We offer three tiers: Starter for individuals and small teams, Pro for scaling companies, and Enterprise for large organizations with custom requirements. Visit our Pricing page for more details."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[#6C4CF0] font-semibold tracking-wide uppercase text-sm mb-3">Support</h2>
                    <h1 className="text-4xl font-bold text-[#0b1220] mb-6">Frequently Asked Questions</h1>
                    <p className="text-lg text-[#475467]">
                        Everything you need to know about the product and billing. Can’t find the answer you’re looking for? <a href="/contact" className="text-[#6C4CF0] font-medium hover:underline">Contact our support team.</a>
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

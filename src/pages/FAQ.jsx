import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../data/faqData";
import Header from "../components/Header";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Header />
      
      <motion.section
        className="faq-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="faq-title">
          Frequently Asked <span className="highlight">Questions</span>
        </h1>
        <p className="faq-subtitle">
          Find answers to your questions
        </p>
      </motion.section>

      <div className="faq-wrapper">

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▾
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

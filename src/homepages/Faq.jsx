import { useState } from "react";

const faqImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5npeBfyU-hjvpuQG5cFEbUq612SpkVJQnzR3Owj-4pw&s=10";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, data science solutions, WordPress customization, and UI/UX design tailored to client needs.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the size and complexity of the project. A simple website can take 1-2 weeks, while larger apps may take a few months. We share a clear timeline after discussing your requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. After launch we provide bug fixes, updates, and technical support so your product keeps running smoothly.",
  },
  {
    question: "Can I get a custom design for my brand?",
    answer:
      "Absolutely. Our designers create custom layouts, colors, and visuals that match your brand identity.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Just reach out through our contact form. We will discuss your idea, offer a free consultation, and send you a proposal.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section w-full bg-[#f8faff] py-[75px] font-['Poppins',sans-serif] text-[#171d2b] max-[650px]:py-14">
      <div className="mx-auto grid w-[84%] max-w-[1150px] grid-cols-[1.2fr_0.8fr] items-center gap-12 max-[800px]:grid-cols-1 max-[650px]:w-[88%]">
        <div>
          <div className="mb-8 text-left max-[800px]:mb-7">
            <p className="mb-[3px] text-[13px] text-[#666]">Have You Any Question</p>
            <h2 className="m-0 text-[32px] font-semibold max-[800px]:text-[27px] max-[480px]:text-[23px]">
              <span className="text-[#174a9c]">Frequently</span> Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-5 py-4 text-left text-[16px] font-medium text-[#171d2b]"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-[#174a9c] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mx-5 mb-4 border-l-2 border-[#1746a2] pl-4 text-[14px] leading-[1.6] text-[#555]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(10,42,138,0.12)] max-[800px]:mx-auto max-[800px]:w-full max-[800px]:max-w-[520px]">
          <img
            className="block h-[460px] w-full object-cover max-[800px]:h-auto max-[800px]:max-h-[420px]"
            src={faqImg}
            alt="A professional working at a laptop"
          />
        </div>
      </div>
    </section>
  );
}
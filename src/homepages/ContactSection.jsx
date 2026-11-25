import { useState } from "react";

const contactItems = [
  {
    icon: "📱",
    title: "Discuss Your Project",
    description:
      "Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.",
  },
  {
    icon: "💬",
    title: "Get a Free Consultation",
    description:
      "Offer a no-obligation consultation to understand the client's needs and propose tailored solutions.",
  },
  {
    icon: "🌐",
    title: "Reach Us Anytime",
    description:
      "Provide multiple contact channels, ensuring clients can connect with you at their convenience.",
  },
];

const fieldClass =
  "w-full min-w-0 rounded-[5px] border border-[#aeb8c8] bg-white p-3 text-[13px] text-[#171d2b] outline-none transition focus:border-[#1746a2] focus:ring-[3px] focus:ring-[#1746a2]/10";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section w-full bg-[#f8faff] pt-9 pb-[75px] font-['Poppins',sans-serif] text-[#171d2b] max-[650px]:pb-14">
      <div className="contact-container mx-auto w-[84%] max-w-[1150px] max-[650px]:w-[88%]">
        <div className="contact-heading mb-14 text-center max-[650px]:mb-9">
          <p className="mb-[3px] text-[13px] text-[#666]">Let's Talk</p>
          <h2 className="m-0 text-[32px] font-semibold max-[800px]:text-[27px] max-[480px]:text-[23px]">
            <span className="text-[#174a9c]">Let's Collaborate</span> and Innovate
          </h2>
        </div>

        <div className="contact-content grid grid-cols-[1fr_1.1fr] items-center gap-16 max-[800px]:grid-cols-1 max-[800px]:gap-9">
          <div className="contact-info flex flex-col gap-11 max-[800px]:gap-6">
            {contactItems.map((item) => (
              <div className="contact-info-item flex items-start gap-[18px]" key={item.title}>
                <div
                  className="contact-info-icon w-[38px] shrink-0 text-center text-[27px]"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="mb-[5px] text-[17px] font-semibold">{item.title}</h3>
                  <p className="max-w-[340px] text-sm leading-[1.55] text-[#666]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="contact-form flex w-full flex-col gap-[13px] rounded-xl bg-white p-[25px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-[480px]:p-[18px]"
            onSubmit={handleSubmit}
          >
            <h3 className="mb-[5px] text-center text-[15px] font-semibold">CONTACT US</h3>

            <div className="contact-form-row grid grid-cols-2 gap-[10px] max-[480px]:grid-cols-1">
              <input
                className={`${fieldClass} h-[43px]`}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className={`${fieldClass} h-[43px]`}
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className={`${fieldClass} h-[43px]`}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className={`${fieldClass} min-h-[100px] resize-y`}
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              className="min-w-[85px] cursor-pointer self-end rounded-full border-0 bg-[#060145] px-[22px] py-[11px] text-[13px] text-white transition-colors hover:bg-[#174a9c]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = encodeURIComponent(form.subject);
    const emailBody = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}`
    );

    const mailtoLink =
      `mailto:info@codesthinker.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    setStatus(
      "Your email application should open with your message ready to send."
    );
  };

  return (
    <section className="contact-section [width:100%] [padding:55px_7%_65px] [background:#f8f9fc] [color:#222] [font-family:'Poppins',_sans-serif] max-[480px]:[padding:40px_5%] [padding:35px_0_75px] [background:#f8faff] [color:#171d2b] max-[650px]:[padding:35px_0_55px]">

      <div className="contact-heading [margin-bottom:45px] [text-align:center] [&_>p]:[margin:0_0_3px] [&_>p]:[color:#666] [&_>p]:[font-size:13px] [&_h2]:[margin:0] [&_h2]:[font-size:32px] [&_h2]:[font-weight:600] [&_h2_span]:[color:#174a9c] max-[800px]:[&_h2]:[font-size:27px] max-[480px]:[&_h2]:[font-size:23px] [margin-bottom:55px] [&_h1]:[font-size:46px] [&_h1]:[font-weight:700] [&_h1]:[color:#111827] [&_h1_span]:[color:#1746a2] max-[850px]:[&_h1]:[font-size:39px] max-[650px]:[margin-bottom:35px] max-[650px]:[&_h1]:[font-size:34px]">
        <h1>
          Get In <span>Touch</span>
        </h1>
      </div>

      <div className="contact-container [max-width:1150px] [margin:0_auto] [width:84%] [margin:auto] [display:grid] [grid-template-columns:1.1fr_0.9fr] [gap:65px] [align-items:start] max-[850px]:[width:90%] max-[850px]:[gap:35px] max-[650px]:[grid-template-columns:1fr] max-[650px]:[width:88%] max-[650px]:[gap:45px]">

        {/* Left Contact Information */}
        <div className="contact-left [&_h2]:[font-size:29px] [&_h2]:[line-height:1.2] [&_h2]:[margin-bottom:22px] [&_h2]:[color:#171d2b] max-[850px]:[&_h2]:[font-size:25px] max-[650px]:[&_h2]:[font-size:25px]">

          <h2>
            Ready To Turn Your Vision Into Reality?
          </h2>

          <p className="contact-description [font-size:14px] [line-height:1.7] [color:#515b6b] [margin-bottom:28px]">
            Want to take your business to the next level?
            At Code's Thinker, we provide creative web
            development, software solutions and digital
            services to help your business grow.
          </p>

          <div className="contact-detail [display:flex] [align-items:center] [gap:16px] [margin-bottom:25px] [&_p]:[color:#505969] [&_p]:[font-size:13px] [&_p]:[line-height:1.6] [&_p]:[text-decoration:none] [&_a]:[color:#505969] [&_a]:[font-size:13px] [&_a]:[line-height:1.6] [&_a]:[text-decoration:none] [&_a:hover]:[color:#1746a2] max-[650px]:[gap:12px]">
            <div className="contact-icon [width:46px] [height:46px] [min-width:46px] [border-radius:50%] [background:#123d91] [color:white] [display:flex] [align-items:center] [justify-content:center] [font-size:22px] [box-shadow:0_4px_12px_rgba(23,_70,_162,_0.15)]">☎</div>

            <div>
              <a href="tel:+921234567890">
                +92 123 456 7890
              </a>
            </div>
          </div>

          <div className="contact-detail [display:flex] [align-items:center] [gap:16px] [margin-bottom:25px] [&_p]:[color:#505969] [&_p]:[font-size:13px] [&_p]:[line-height:1.6] [&_p]:[text-decoration:none] [&_a]:[color:#505969] [&_a]:[font-size:13px] [&_a]:[line-height:1.6] [&_a]:[text-decoration:none] [&_a:hover]:[color:#1746a2] max-[650px]:[gap:12px]">
            <div className="contact-icon [width:46px] [height:46px] [min-width:46px] [border-radius:50%] [background:#123d91] [color:white] [display:flex] [align-items:center] [justify-content:center] [font-size:22px] [box-shadow:0_4px_12px_rgba(23,_70,_162,_0.15)]">✉</div>

            <div>
              <a href="mailto:info@codesthinker.com">
                info@codesthinker.com
              </a>
            </div>
          </div>

          <div className="contact-detail [display:flex] [align-items:center] [gap:16px] [margin-bottom:25px] [&_p]:[color:#505969] [&_p]:[font-size:13px] [&_p]:[line-height:1.6] [&_p]:[text-decoration:none] [&_a]:[color:#505969] [&_a]:[font-size:13px] [&_a]:[line-height:1.6] [&_a]:[text-decoration:none] [&_a:hover]:[color:#1746a2] max-[650px]:[gap:12px]">
            <div className="contact-icon [width:46px] [height:46px] [min-width:46px] [border-radius:50%] [background:#123d91] [color:white] [display:flex] [align-items:center] [justify-content:center] [font-size:22px] [box-shadow:0_4px_12px_rgba(23,_70,_162,_0.15)]">●</div>

            <div>
              <p>
                Bartle House 9 Oxford Court,
                Manchester M23WQ
                <br />
                United Kingdom (Regional Office)
              </p>
            </div>
          </div>

          <div className="contact-detail [display:flex] [align-items:center] [gap:16px] [margin-bottom:25px] [&_p]:[color:#505969] [&_p]:[font-size:13px] [&_p]:[line-height:1.6] [&_p]:[text-decoration:none] [&_a]:[color:#505969] [&_a]:[font-size:13px] [&_a]:[line-height:1.6] [&_a]:[text-decoration:none] [&_a:hover]:[color:#1746a2] max-[650px]:[gap:12px]">
            <div className="contact-icon [width:46px] [height:46px] [min-width:46px] [border-radius:50%] [background:#123d91] [color:white] [display:flex] [align-items:center] [justify-content:center] [font-size:22px] [box-shadow:0_4px_12px_rgba(23,_70,_162,_0.15)]">●</div>

            <div>
              <p>
                Hassan Manzil Basement Goheer Town
                <br />
                Bahawalpur (Global Delivery Center)
              </p>
            </div>
          </div>

          <div className="contact-socials [display:flex] [gap:16px] [margin-top:35px] [&_a]:[width:39px] [&_a]:[height:39px] [&_a]:[background:#123d91] [&_a]:[color:white] [&_a]:[border-radius:50%] [&_a]:[display:flex] [&_a]:[align-items:center] [&_a]:[justify-content:center] [&_a]:[font-size:16px] [&_a]:[font-weight:600] [&_a]:[text-decoration:none] [&_a]:[transition:0.3s] [&_a:hover]:[background:#f5b82e] [&_a:hover]:[color:#060145] [&_a:hover]:[transform:translateY(-4px)]">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">♥</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>

        </div>

        <div className="contact-right [width:100%] [&_h2]:[font-size:24px] [&_h2]:[margin-bottom:22px] [&_h2]:[color:#171d2b] max-[650px]:[&_h2]:[font-size:22px]">

          <h2>Book a Free Consultation</h2>

          <form
            className="contact-form [display:flex] [flex-direction:column] [gap:13px] [padding:25px] [border-radius:12px] [background:#fff] [box-shadow:0_8px_30px_rgba(0,_0,_0,_0.06)] [&_h3]:[margin:0_0_5px] [&_h3]:[font-size:15px] [&_h3]:[font-weight:600] [&_h3]:[text-align:center] [&_input]:[width:100%] [&_input]:[min-width:0] [&_input]:[padding:11px] [&_input]:[border:1px_solid_#aeb4bd] [&_input]:[border-radius:5px] [&_input]:[outline:none] [&_input]:[background:#fff] [&_input]:[color:#222] [&_input]:[font-family:inherit] [&_input]:[font-size:13px] [&_textarea]:[width:100%] [&_textarea]:[min-width:0] [&_textarea]:[padding:11px] [&_textarea]:[border:1px_solid_#aeb4bd] [&_textarea]:[border-radius:5px] [&_textarea]:[outline:none] [&_textarea]:[background:#fff] [&_textarea]:[color:#222] [&_textarea]:[font-family:inherit] [&_textarea]:[font-size:13px] [&_input:focus]:[border-color:#174a9c] [&_textarea:focus]:[border-color:#174a9c] [&_textarea]:[resize:vertical] [&_button]:[align-self:flex-end] [&_button]:[min-width:85px] [&_button]:[padding:11px_22px] [&_button]:[border:none] [&_button]:[border-radius:25px] [&_button]:[background:#060145] [&_button]:[color:#fff] [&_button]:[font-family:inherit] [&_button]:[font-size:13px] [&_button]:[cursor:pointer] [&_button]:[transition:background_0.3s_ease] [&_button:hover]:[background:#174a9c] max-[480px]:[padding:18px] [width:100%] [&_label]:[font-size:13px] [&_label]:[font-weight:600] [&_label]:[margin-bottom:7px] [&_label]:[color:#252b38] [&_input]:[padding:12px] [&_input]:[margin-bottom:17px] [&_input]:[border:1px_solid_#aeb8c8] [&_input]:[background:#ffffff] [&_input]:[color:#171d2b] [&_input]:[transition:0.3s] [&_textarea]:[padding:12px] [&_textarea]:[margin-bottom:17px] [&_textarea]:[border:1px_solid_#aeb8c8] [&_textarea]:[background:#ffffff] [&_textarea]:[color:#171d2b] [&_textarea]:[transition:0.3s] [&_input]:[height:43px] [&_textarea]:[min-height:100px] [&_input:focus]:[border-color:#1746a2] [&_input:focus]:[box-shadow:0_0_0_3px_rgba(23,_70,_162,_0.10)] [&_textarea:focus]:[border-color:#1746a2] [&_textarea:focus]:[box-shadow:0_0_0_3px_rgba(23,_70,_162,_0.10)]"
            onSubmit={handleSubmit}
          >

            <label htmlFor="contact-name">
              Full Name *
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-email">
              Work Email *
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Working Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-subject">
              Subject
            </label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Enter your subject"
              value={form.subject}
              onChange={handleChange}
            />

            <label htmlFor="contact-message">
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Describe your message here"
              value={form.message}
              onChange={handleChange}
              required
            />

            <div className="contact-submit [display:flex] [justify-content:flex-end] [&_button]:[border:none] [&_button]:[border-radius:25px] [&_button]:[padding:12px_22px] [&_button]:[background:#060d36] [&_button]:[color:white] [&_button]:[font-family:inherit] [&_button]:[font-size:12px] [&_button]:[font-weight:600] [&_button]:[cursor:pointer] [&_button]:[transition:0.3s] [&_button:hover]:[background:#1746a2] [&_button:hover]:[transform:translateY(-2px)] [&_button_span]:[margin-left:8px]">
              <button type="submit">
                SUBMIT <span>➤</span>
              </button>
            </div>

            {status && (
              <p className="contact-status [margin-top:15px] [font-size:13px] [color:#1746a2] [line-height:1.6]">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}
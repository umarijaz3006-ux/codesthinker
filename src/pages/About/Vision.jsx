const points = [
  "Industry Expert Staff",
  "Client-Centric Focus",
  "Partner rather than Vendor",
  "Solutions Geared to Improve Productivity",
  "Collaborative Approach Throughout the Process",
];

// Put your image path here (for example an imported file or a URL)
const visionImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvUis0w_Ta1ikDTgR0lLdJJNvo1_gDxFUV_ZKhxl3TQ&s=10";

export default function Vision() {
  return (
    <section className="vision-section w-full bg-white py-16 font-['Poppins',sans-serif] text-[#171d2b] max-[650px]:py-10">
      <div className="mx-auto grid w-[88%] max-w-[1200px] grid-cols-[1fr_1.2fr] items-center gap-14 max-[850px]:grid-cols-1 max-[850px]:gap-8">
        <div className="overflow-hidden rounded-xl bg-[#eef2fa]">
          {visionImage ? (
            <img
              src={visionImage}
              alt="Our vision"
              className="h-full max-h-[440px] w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-[380px] w-full max-[850px]:h-[260px]" />
          )}
        </div>

        <div>
          <p className="mb-1 text-[14px] uppercase tracking-wide text-[#555]">Who We Are</p>
          <h2 className="mb-4 text-[38px] font-semibold uppercase leading-tight max-[850px]:text-[32px] max-[480px]:text-[26px]">
            Your <span className="text-[#174a9c]">Vision</span> Our Code
          </h2>

          <p className="mb-7 text-justify text-[15px] leading-[1.7] text-[#333]">
            At Codes Thinker, we are a passionate team of developers, designers,
            and strategists dedicated to building smart, scalable, and
            user-focused digital solutions. We thrive on creativity, and
            cutting-edge technology to transform ideas into impactful products.
            With a commitment to quality, transparency, and client satisfaction,
            we don't just deliver code — we deliver value. Every project we take
            on reflects our belief in innovation, precision, and long-term
            partnerships.
          </p>

          <ul className="m-0 flex list-none flex-col items-start gap-4 p-0">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-lg bg-white px-4 py-2 text-[15px] shadow-[0_4px_14px_rgba(0,0,0,0.07)] transition-transform duration-300 hover:-translate-y-1"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-[#171d2b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
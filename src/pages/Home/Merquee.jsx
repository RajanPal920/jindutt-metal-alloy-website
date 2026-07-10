import React from "react";
import Marquee from "react-fast-marquee";

const Merquee = () => {
  return (
    // The wrapper ensures nothing escapes horizontally or vertically
    <section className="w-full overflow-hidden bg-blue-900 py-5">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={false}
        pauseOnClick={false}
        autoFill={true}
      >
        {[...Array(8)].map((_, index) => (
          <span
            key={index}
            className="mx-10 inline-block whitespace-nowrap text-2xl font-bold tracking-wide text-white md:text-3xl"
          >
            • FORGING INDUSTRIAL RESILIENCE WORLDWIDE
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default Merquee;

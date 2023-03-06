import React from "react";
import Image from "next/image";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in Working Together?
        </h2>
        <a
          href="mailto:ernestodelazamora@gma"
          className="cursor-pointer font-bold whitespace-nowrap
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <Image
        alt="Fancy lines"
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/303678.svg"
        height={500}
        width={500}
      />
    </div>
  );
}

export default CTA;

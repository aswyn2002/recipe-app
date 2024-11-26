import React from "react";

function SpecialCard({ title, description }) {
  return (
    <div className="relative special-card w-72 mt-8 bg-[#7DBFA3] p-6 shadow-md rounded-[15px] flex flex-col items-left text-left hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
      <span className="absolute top-5 left-5 h-[26px] bg-black bg-opacity-60 px-3 py-0.5 font-poppins text-white rounded-md">
        PRO
      </span>
      <h3 className="text-lg md:text-xl text-white font-Berkshire font-medium mb-4 mt-11">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white mb-6">{description}</p>

      <img
        src="/src/images/twha_ezay_210204-removebg-preview.png"
        alt=""
        className="hidden lg:block absolute bottom-0 right-0 max-w-full h-auto sm:h-32 md:h-40 lg:h-44"
      />
    </div>
  );
}

export default SpecialCard;

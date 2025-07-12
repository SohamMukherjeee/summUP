import React from "react";

function Cardbar({ logo, heading, para }) {
  return (
    <div className="w-full sm:w-80 lg:w-96 bg-white/10  border border-black/15  rounded-3xl shadow-xl p-6  hover:scale-[1.03] hover:shadow-2xl duration-300 cursor-pointer ">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Logo Circle */}
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/20 text-black text-3xl shadow-md transition-all duration-300 hover:scale-110">
          {logo}
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-red-400 hover:text-red-500 transition-all duration-300">
          {heading}
        </h2>

        {/* Paragraph */}
        <p className="text-base  px-2 leading-relaxed">{para}</p>
      </div>
    </div>
  );
}

export default Cardbar;

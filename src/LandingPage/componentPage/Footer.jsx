import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-[#F2F1ED] p-4">
        <div className="w-full max-w-5xl h-[50vh] sm:h-[40vh] md:h-[50vh] border-4 border-[#DCDAD6] rounded-2xl sm:rounded-3xl flex items-center justify-center flex-col overflow-hidden">
          {/* Moving Text */}
          <div className="w-full flex-1 flex items-center justify-center">
            <Marquee
              speed={40}
              gradient={true}
              gradientColor={[242, 241, 237]} // matches background
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-800/10 px-8 sm:px-16 whitespace-nowrap">
                SUMMUP SUMMUP SUMMUP SUMMUP SUMMUP
              </h1>
            </Marquee>
          </div>

          {/* Bottom Section */}
          <div className="w-full h-auto sm:h-1/5 px-4 sm:px-10 py-2 sm:py-0 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <h1 className="text-gray-800/40 text-xs sm:text-sm font-semibold text-center sm:text-left">
              Transform lengthy content into concise,
              <br className="hidden sm:block" /> meaningful summaries.
            </h1>
            <h1 className="text-gray-800/40 text-xs sm:text-sm font-semibold">
              Soham Mukherjee
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

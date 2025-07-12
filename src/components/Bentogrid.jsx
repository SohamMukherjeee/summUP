function Bentogrid() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-80 w-full px-4 gap-4 text-white">
      {/* Left Card (WhatsApp) */}
      <div className="relative h-1/3 sm:h-full w-full sm:w-1/2 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xl overflow-hidden">
        {/* Radial background inside card */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <img
          src="https://img.icons8.com/?size=100&id=16712&format=png&color=40C057"
          alt=""
        />
      </div>

      {/* Right Column with Twitter & Link */}
      <div className="h-2/3 sm:h-full w-full sm:w-1/2 flex flex-col gap-4">
        {/* Twitter Card */}
        <div className="relative h-1/2 w-full flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <img
            src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=1A1A1A"
            alt=""
          />
        </div>

        {/* Link Card */}
        <div className="relative h-1/2 w-full flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xl overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <img
            src="https://img.icons8.com/?size=100&id=7867&format=png&color=1A1A1A"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Bentogrid;

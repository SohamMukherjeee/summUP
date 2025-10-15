import Noise from "../componentPage/Noise";
function Feature() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center flex-col mt-20 z-50">
          <h1 className="bg-[#F2F4F5] w-50 border border-black/10 text-center rounded-2xl text-[#3A4747] font-sans px-2 py-1 font-semibold">
            <span className=" bg-[#A4D2E7] text-[#A4D2E7] rounded pl-1 mr-1 text-center">
              |
            </span>{" "}
            What's the problem?
          </h1>
          <p className="mt-10 text-center px-4 text-lg sm:text-3xl font-sans font-semibold text-gray-600 ">
            Reading through long articles and then trying to share a concise
            version is frustrating.
          </p>
          <p className="mt-10 text-center px-4 text-2xl font-sans font-semibold text-gray-400">
            With <span className="text-gray-600">summup</span>, you can
            instantly <span className="text-gray-600">summarize</span> any news
            article <br />
            and <span className="text-gray-600"> share</span> a crisp, ready to
            use summary in one click.
          </p>
        </div>
      </div>
    </>
  );
}
export default Feature;

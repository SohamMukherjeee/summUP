import { Circle, Check } from "lucide-react";

function SumMoving() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold text-[#4A5565] text-center mb-10">
          Article Comparison
        </h1>

        <div className="w-[90vw] max-w-6xl h-auto rounded-2xl mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 bg-[#DCDAD6]">
          {/* Left Card */}
          <div className="flex-1 bg-[#F2F1ED] rounded-2xl p-6 border-2 border-dashed border-gray-400">
            <div className="flex justify-between items-center flex-row">
              <h2 className="text-lg font-semibold text-gray-800 font-sans flex items-center gap-x-2">
                <Circle className="text-[#99A1AF]" />
                700 words
              </h2>
              <h1 className="bg-[#e751106a] h-5 w-27 text-sm rounded-2xl text-center font-sans font-semibold text-gray-500">
                Original Article
              </h1>
            </div>
            <p className="mt-4 text-[#99A1AF] font-sans">
              YouTube secretly used AI to edit people's videos. The results
              could bend reality
            </p>
          </div>

          {/* Middle "Summarising" Section */}
          <div className="flex-1 flex flex-col  items-center justify-center gap-4 bg-[#dcdad6] rounded-2xl">
            <h1 className="text-center text-gray-700 font-semibold animate-pulse">
              Summarising done
            </h1>
            <div className="flex gap-x-1 text-center ">
              <p className="text-red-500 text-sm font-bold animate-pulse">
                -610
              </p>
              <p className="text-green-500 text-sm font-bold animate-pulse">
                +20
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-[#F2F1ED] rounded-2xl p-6 border-3 border-gray-200">
            <div className="flex justify-between items-center flex-row">
              <h2 className="text-lg font-semibold text-gray-800 font-sans flex items-center gap-x-2">
                <Check className="text-[#99A1AF]" />
                110 words
              </h2>
              <h1 className="bg-[#50e7106a] h-5 w-35 text-sm rounded-2xl text-center font-sans font-semibold text-gray-500">
                Summarized Article
              </h1>
            </div>
            <p className="mt-4 text-[#99A1AF] font-sans">
              YouTube secretly used AI to edit people's videos. The results
              could bend reality
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SumMoving;

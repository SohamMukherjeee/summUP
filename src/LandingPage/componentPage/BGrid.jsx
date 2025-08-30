function BGrid() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "Get comprehensive summaries. No more spending hours reading lengthy articles.",
    },
    {
      title: "Privacy Protected",
      desc: "Your reading habits stay private. We don’t track, store, or share your browsing data.",
    },
    {
      title: "Works Everywhere",
      desc: "Compatible with all major news websites,from Hindustan Times to BBC.",
    },
  ];

  return (
    <div className="w-[80vw] flex flex-col sm:flex-row items-center justify-between mt-30 gap-4 border border-gray-600/10 p-3 rounded-2xl bg-[#F0EFED]">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 flex-1  h-50">
          <h2 className="text-lg font-semibold text-gray-800 font-sans items-center flex gap-x-1">
            <span className=" bg-[#F0EFED] text-[#F0EFED] rounded pl-1 mr-1 text-center">
              |
            </span>{" "}
            {feature.title}
          </h2>
          <p className="mt-4 text-[#99A1AF] font-sans">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default BGrid;

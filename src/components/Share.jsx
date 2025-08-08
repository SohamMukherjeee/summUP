import { MdOutlineSummarize } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

export default function Share({ button }) {
  const features = [
    {
      icon: <MdOutlineSummarize className="text-4xl  mb-3" />,
      title: "Summarize",
      desc: "Generate your content summary instantly",
    },
    {
      icon: <BiLinkAlt className="text-4xl mb-3" />,
      title: "Copy Link",
      desc: "Get a shareable URL in one click",
    },
    {
      icon: <FiSend className="text-4xl  mb-3" />,
      title: "Share",
      desc: "Send to friends or post anywhere",
    },
  ];

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold mb-4">
        Effortless <span className="text-red-400">Sharing</span>
      </h2>
      <p className="text-gray-500 mb-10">
        Turn your summaries into shareable links with just a click.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10 ">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-xl shadow hover:shadow-md transition bg-white/10  border border-black/15"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <button
        onClick={button}
        className="btn btn-primary bg-red-400 text-white px-6 py-2 text-lg flex items-center gap-2 mx-auto"
      >
        Try It Now <FaPlay />
      </button>
    </section>
  );
}

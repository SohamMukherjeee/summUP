import { useState, useEffect } from "react";
import "../App.css";
import { Link, Element } from "react-scroll";
import { BsStars } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { ImPower } from "react-icons/im";
import Cardbar from "./Cardbar";
import Navbar from "./Navbar";
import { IoEarth } from "react-icons/io5";
import BeforeText from "./BeforeText";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./auth";
import Bentogrid from "./Bentogrid";
import Share from "./Share";
import logo from "../assets/logo2-removebg-preview.png";

function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/summarize");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  function googleLogin() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log("Done");
        if (result.user) {
          navigate("/summarize"); // Ensure this redirects to /dashboard
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading if something fails
      });
  }

  return (
    <>
      <div className="relative h-full w-full overflow-hidden">
        {/* Background Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0"></div>

        {/* Main Content Layer */}
        <div className="relative z-10 flex items-center justify-center flex-col overflow-x-hidden">
          <Navbar />

          <div className="badge badge-soft badge-secondary my-15 text-red-400 shadow-2xl border-red-400/15">
            <BsStars /> AI-Powered News Summarization
          </div>

          <div data-aos="fade-down">
            <h1 className="font-bold text-3xl sm:text-6xl my-3 text-center">
              <span className="inline-flex items-center justify-center gap-3">
                Instantly
                <img
                  src={logo}
                  className="w-8 sm:w-12 h-12 sm:h-16 inline-block"
                  alt="Logo"
                />
                <span className="text-red-400 italic">Summarize</span>
              </span>
              <br /> Any News Article
            </h1>
          </div>

          <p className="text-md sm:text-xl text-center my-5 px-3 sm:px-0 font-serif">
            Transform lengthy news articles into concise, actionable summaries
            in seconds. <br />
            Stay informed without the overwhelm.
          </p>

          <div className="flex items-center justify-center flex-row gap-9 my-10">
            <button
              onClick={googleLogin}
              className="btn btn-neutral hover:bg-red-400 hover:text-black"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Get Started"}
            </button>
            <Link to="howItWorks" smooth={true} duration={500}>
              <button className="btn btn-dash">How it works</button>
            </Link>
          </div>

          <div className="flex items-center justify-center flex-row gap-9 my-7 p-5">
            <h1 className="flex flex-col text-center sm:flex-row gap-2 items-center justify-center">
              <GoClock className="text-red-400" /> Time saving summaries
            </h1>
            <h1 className="flex flex-col text-center sm:flex-row gap-2 items-center justify-center">
              <MdOutlinePrivacyTip className="text-red-400" /> Privacy First
            </h1>
            <h1 className="flex flex-col text-center sm:flex-row gap-2 items-center justify-center">
              <ImPower className="text-red-400" /> AI Powered
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col overflow-x-hidden">
        <h1 className="text-5xl font-bold text-center my-20">
          Why Choose <span className="text-red-400">SummUP?</span>
        </h1>
        <div data-aos="zoom-in">
          <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-5 my-20 px-4 sm:px-0">
            <Cardbar
              logo={<ImPower />}
              heading="Lightning Fast"
              para="Get comprehensive summaries in seconds.No more spending hours reading lengthy articles."
            />
            <Cardbar
              logo={<MdOutlinePrivacyTip />}
              heading="Privacy Protected"
              para="Your reading habits stay private. We don't track, store, or share your browsing data."
            />
            <Cardbar
              logo={<IoEarth />}
              heading="Works Everywhere"
              para="Compatible with all major news websites. From Hindustan Times to BBC."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-5  sm:p-20">
        <BeforeText />
      </div>
      <div className="flex justify-center items-center flex-col  w-full p-5 gap-y-5 ">
        <Share button={googleLogin} />
        <Bentogrid />
      </div>
      <Element name="howItWorks">
        <div className="flex justify-center items-center flex-col my-8">
          <h1 className="text-3xl sm:text-5xl font-bold">Simple as 1-2-3</h1>
          <div>
            <ul className="steps steps-vertical sm:steps-horizontal text-xl font-bold my-20 gap-x-5 px-20">
              <li className="step">
                <h1 className="text-red-400">Paste URL</h1>
                <p className="my-3 hidden sm:block">
                  Copy any news article link <br /> and paste it into SummUP.
                </p>
              </li>
              <li className="step">
                <h1 className="text-red-400">AI Analysis</h1>
                <p className="my-3 hidden sm:block">
                  Analyzes the entire article, <br />
                  identifying key points.
                </p>
              </li>
              <li className="step">
                <h1 className="text-red-400">Get Summary</h1>
                <p className="my-3 hidden sm:block">
                  Receive a accurate summary <br />
                  that captures all information
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </Element>
    </>
  );
}
export default HowItWorks;

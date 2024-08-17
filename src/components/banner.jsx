import { useEffect, useState } from "react";
import { slideInfo } from "../utils/slideInfo";
import { ZoomAnimation } from "./animation"

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slide, setSlide] = useState(slideInfo[0]);

  function changeSlide(index) {
    setSlideIndex(index);
  }

  useEffect(() => {
    setSlide(slideInfo[slideIndex - 1]);
  }, [slideIndex])

  useEffect(() => {
    const interval = setInterval(() => {      
      if (slideIndex === 4) {
        setSlideIndex(1);
      } else {
        setSlideIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval)
  }, [slideIndex]);

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(${slide.gradient}), url(/banner/${slide.background})`,
      }}
      className="sm:h-screen h-[100vh] w-full bg-center bg-cover flex items-center justify-center transition duration-500"
    >
      <ZoomAnimation>
      <div className="text-white text-center">
        <h1 className="text-8xl font-black font-lato">{slide.title}</h1>
        <p className="mt-3 text-lg">{slide.desc}</p>
      </div>
      </ZoomAnimation>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black px-4 py-2 flex items-center gap-2 rounded-sm">
        <div
          className={`w-4 h-4 rounded-full ${
            slideIndex === 1 ? "bg-white" : "bg-gray-400"
          } cursor-pointer`}
          onClick={() => changeSlide(1)}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            slideIndex === 2 ? "bg-white" : "bg-gray-400"
          } cursor-pointer`}
          onClick={() => changeSlide(2)}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            slideIndex === 3 ? "bg-white" : "bg-gray-400"
          } cursor-pointer`}
          onClick={() => changeSlide(3)}
        ></div>
        <div
          className={`w-4 h-4 rounded-full ${
            slideIndex === 4 ? "bg-white" : "bg-gray-400"
          } cursor-pointer`}
          onClick={() => changeSlide(4)}
        ></div>
      </div>
    </section>
  );
};

export default Banner;

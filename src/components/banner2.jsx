import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { slideInfo } from "../utils/slideInfo";

const BannerTwo = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slide, setSlide] = useState(slideInfo[0]);

  function changeSlide(direction) {    
    if(direction === 'prev' && slideIndex !== 1){
        setSlideIndex(prev => prev - 1)
    }else if(direction === 'next' && slideIndex !== 4){        
        setSlideIndex(prev => prev + 1)
    }
  }

  useEffect(() => {
    setSlide(slideInfo[slideIndex - 1]);
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === 4) {
        setSlideIndex(1);
      } else {
        setSlideIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <section className="sm:px-32 px-2 pt-20 pb-8 sm:flex items-center justify-between">
      <div className="flex sm:block items-center justify-center flex-col text-center sm:text-left">
        <h1 className={`text-7xl font-extrabold font-lato max-w-[40rem] ${slide.text_color}`}>
          {slide.title}
        </h1>
        <h4 className="text-gray-500 text-lg mt-6 max-w-[35rem]">
          {slide.desc}
        </h4>
        <div className="flex mt-4 gap-5">
          <FaChevronLeft
            size={50}
            className={`border-2 ${slide.border_color} rounded-full p-2 flex items-center justify-center cursor-pointer transition duration-300 ${slide.bg_color} ${slide.text_color} hover:text-white`}
            onClick={() => changeSlide('prev')}
          />
          <FaChevronRight
            size={50}
            className={`border-2 ${slide.border_color} rounded-full p-2 flex items-center justify-center cursor-pointer transition duration-300 ${slide.bg_color} ${slide.text_color} hover:text-white`}
            onClick={() => changeSlide('next')}
          />
        </div>
      </div>
      <img
        src={`/banner/${slide.background}`}
        alt="Banner | Wonderful Lyon"
        className={`sm:w-[35rem] w-[30rem] sm:h-[25rem] h-[20rem] sm:mt-0 mt-6 rounded-lg shadow-2xl banner-image object-cover select-none ${slide.shadow}`}
      />
    </section>
  );
};

export default BannerTwo;

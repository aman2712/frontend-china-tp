import { ZoomAnimation } from "./animation";

export default function History() {
  return (
    <section className="sm:px-16 px-4 mb-20 relative sm:h-[1200px] h-auto sm:block flex flex-col items-center">
      <p className="flex tracking-widest sm:text-xl text-lg items-center gap-2 font-bold justify-center">
        HISTORY <span className="w-24 h-1 bg-yellow-400 rounded-sm"></span>
      </p>
      <h1 className="sm:text-5xl text-3xl font-lato mt-2 font-extrabold text-center">
        Take a look at our <span className="text-yellow-500">History!</span>
      </h1>
      <svg
        height={902}
        width={500}
        className="mx-auto mt-16 absolute top-20 left-1/2 -translate-x-1/2 sm:block hidden"
      >
        <line
          x1={250}
          y1={0}
          x2={250}
          y2={900}
          stroke="black"
          strokeWidth={3}
        />
        <line
          x1={250}
          y1={100}
          x2={0}
          y2={100}
          stroke="black"
          strokeWidth={3}
        />
        <line
          x1={250}
          y1={300}
          x2={500}
          y2={300}
          stroke="black"
          strokeWidth={3}
        />
        <line
          x1={250}
          y1={500}
          x2={0}
          y2={500}
          stroke="black"
          strokeWidth={3}
        />
        <line
          x1={250}
          y1={700}
          x2={500}
          y2={700}
          stroke="black"
          strokeWidth={3}
        />
        <line
          x1={250}
          y1={900}
          x2={0}
          y2={900}
          stroke="black"
          strokeWidth={2}
        />
        <circle r="5" cx="250" cy="5" fill="black" />
      </svg>
      <div className="sm:absolute block sm:mt-0 mt-10 w-80 h-48 bg-pink-300 rounded-md top-[150px] left-[230px] p-4">
        <ZoomAnimation>
          <h3 className="font-lato text-2xl font-extrabold mb-2">
            Ancient Times:
          </h3>
          <p className="text-[16px] text-gray-700">
            43 BC: The Romans establish Lugdunum, a strategic city and
            administrative center, on the confluence of the Rhône and Saône
            rivers.
          </p>
        </ZoomAnimation>
      </div>
      <div className="sm:absolute block sm:mt-0 mt-10 w-80 h-48 bg-yellow-300 rounded-md top-[350px] left-[1040px] p-4">
        <ZoomAnimation>
          <h3 className="font-lato text-2xl font-extrabold mb-4">
            Medieval Era:
          </h3>
          <p className="text-[16px] text-gray-700">
            12th Century: Lyon emerges as a significant center of trade and
            banking, with the development of the silk industry.
          </p>
        </ZoomAnimation>
      </div>
      <div className="sm:absolute block sm:mt-0 mt-10 w-80 h-48 bg-red-300 rounded-md top-[550px] left-[230px] p-4">
        <ZoomAnimation>
          <h3 className="font-lato text-2xl font-extrabold mb-2">
            Renaissance and Enlightenment:
          </h3>
          <p className="text-[16px] text-gray-700">
            15th Century: Lyon becomes the "Silk Capital of the World," with its
            silk industry reaching its peak.
          </p>
        </ZoomAnimation>
      </div>
      <div className="sm:absolute block sm:mt-0 mt-10 w-80 h-48 bg-blue-300 rounded-md top-[750px] left-[1040px] p-4">
        <ZoomAnimation>
          <h3 className="font-lato text-2xl font-extrabold mb-2">
            Modern Lyon:
          </h3>
          <p className="text-[16px] text-gray-700 text-sm mb-1">
            19th Century: Lyon experiences rapid industrial growth, becoming a
            major center of manufacturing.
          </p>
          <p className="text-[16px] text-gray-700 text-sm">
            20th Century: The city faces challenges, including the decline of
            the silk industry and the devastation of World War II.
          </p>
        </ZoomAnimation>
      </div>
      <div className="sm:absolute block sm:mt-0 mt-10 w-80 h-48 bg-orange-300 rounded-md top-[950px] left-[230px] py-8 px-4">
        <ZoomAnimation>
          <h3 className="font-lato text-2xl font-extrabold mb-4">
            Present Day:
          </h3>
          <p className="text-[16px] text-gray-700">
            15th Century: Lyon becomes the "Silk Capital of the World," with its
            silk industry reaching its peak.
          </p>
        </ZoomAnimation>
      </div>
    </section>
  );
}

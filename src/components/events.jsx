import { eventsInfo } from "../utils/eventsInfo";
import { ZoomAnimation } from "./animation";

export default function Events() {
  return (
    <section className="sm:px-16 px-4 mb-20">
      <p className="flex tracking-widest sm:text-xl text-lg items-center gap-2 font-bold">
        EVENTS <span className="w-24 h-1 bg-blue-400 rounded-sm"></span>
      </p>
      <h1 className="sm:text-5xl text-3xl font-lato mt-2 font-extrabold">
        Enjoy A Wide Array of <span className="text-blue-400">Events!</span>
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-1 px-5 gap-4">
        {eventsInfo.map((event, index) => (
          <ZoomAnimation key={index} id={`event-card-${index}`}>
            <div
              className="mt-12 rounded overflow-hidden group cursor-pointer"
            >
              <div className="sm:h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt="Chocolate fair - Mondial du Chocolat et du Cacao"
                  className="group-hover:scale-125 transition duration-500"
                />
              </div>
              <div className="pt-2 bg-gray-200 p-2 h-80 flex flex-col justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    {event.date}
                  </p>
                  <h3 className="font-lato font-semibold my-2 text-2xl">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {event.desc}
                  </p>
                </div>
                <div className="flex justify-between items-center px-2 mt-2 mb-2">
                  <h4 className="font-lato font-semibold text-xl text-gray-700">
                    {event.price}$
                  </h4>
                  <button className="btn border-blue-400 hover:text-blue-400 bg-blue-400">Join Now</button>
                </div>
              </div>
            </div>
          </ZoomAnimation>
        ))}
      </div>
    </section>
  );
}

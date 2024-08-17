import React from "react";

export default function Help() {
  return (
    <section className="sm:px-16 px-6 mb-20" id="help">
      <p className="flex tracking-widest sm:text-xl text-lg items-center gap-2 font-bold">
        NEED HELP? <span className="w-24 h-1 bg-orange-400 rounded-sm"></span>
      </p>
      <h1 className="sm:text-5xl text-3xl font-lato mt-2 font-extrabold">
        Feel free to <span className="text-orange-400">reach out!</span>
      </h1>
      <div className="sm:flex sm:px-10 mt-10">
        <div className="flex-1 flex flex-col gap-3 sm:pr-10 sm:border-r border-gray-300">
          <h2 className="question text-lg mb-2 text-gray-600 transition duration-300 hover:text-black cursor-pointer bg-gray-200 hover:bg-gray-300 px-8 py-4">
            What are the essential things to do in Lyon?
          </h2>
          <h2 className="question text-lg mb-2 text-gray-600 transition duration-300 hover:text-black cursor-pointer bg-gray-200 hover:bg-gray-300 px-8 py-4">
            When is the Fête des Lumières held in Lyon?
          </h2>
          <h2 className="question text-lg mb-2 text-gray-600 transition duration-300 hover:text-black cursor-pointer bg-gray-200 hover:bg-gray-300 px-8 py-4">
            Is there are a special pass for visitors to Lyon?
          </h2>
          <h2 className="question text-lg mb-2 text-gray-600 transition duration-300 hover:text-black cursor-pointer bg-gray-200 hover:bg-gray-300 px-8 py-4">
            How to take a guided tour in Lyon?
          </h2>
          <h2 className="question text-lg mb-2 text-gray-600 transition duration-300 hover:text-black cursor-pointer bg-gray-200 hover:bg-gray-300 px-8 py-4">
            What are the opening hours of the Lyon Tourist Office?
          </h2>
        </div>
        <div className="flex-1 flex flex-col sm:pl-10 sm:mt-0 mt-10">
          <h1 className="text-4xl font-lato mt-2 font-extrabold mb-5">
            Or send a message!
          </h1>
          <input type="email" placeholder="Enter your email..." className="bg-gray-200 py-3 px-4 text-black outline-none rounded-md mb-4" />
          <textarea placeholder="Type in your query!" className="bg-gray-200 py-3 px-4 text-black outline-none rounded-md mb-4 h-[150px]"></textarea>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </section>
  );
}

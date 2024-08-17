export default function People() {
  return (
    <section className="sm:px-16 px-4 mb-20">
      <p className="flex tracking-widest sm:text-xl text-lg items-center gap-2 font-bold justify-center">
        NOTABLE PEOPLE <span className="w-24 h-1 bg-green-400 rounded-sm"></span>
      </p>
      <h1 className="sm:text-5xl text-3xl font-lato mt-2 font-extrabold text-center">
        Take a look at our <span className="text-green-500">pride!</span>
      </h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:px-20 px-2 mt-16 gap-4">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/people/people-1.jpg)",
          }}
          className="h-[500px] bg-center bg-cover rounded-md flex justify-end p-4 text-white flex-col group cursor-pointer grayscale hover:grayscale-0 transition duration-300"
        >
          <div className="sm:group-hover:visible sm:invisible transition duration-300">
            <h1 className="text-4xl font-lato font-bold">Allen Kardec</h1>
            <p className="text-gray-200 mt-2">
              Allan Kardec was a French educator and writer who is considered
              the founder of Spiritism, a philosophy and religious movement that
              emphasizes communication with spirits. He authored the influential
              book "The Spirits' Book," which outlined the basic principles of
              Spiritism.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/people/people-2.gif)",
          }}
          className="h-[500px] bg-center bg-cover rounded-md flex justify-end p-4 text-white flex-col group cursor-pointer grayscale hover:grayscale-0 transition duration-300"
        >
          <div className="sm:group-hover:visible sm:invisible transition duration-300">
            <h1 className="text-4xl font-lato font-bold">André Coindre</h1>
            <p className="text-gray-200 mt-2">
              André Coindre was a French Catholic priest who founded the
              Congregation of the Missionaries of the Sacred Heart in 1850. He
              dedicated his life to serving the poor and marginalized,
              particularly in Latin America.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/people/people-3.jpg)",
          }}
          className="h-[500px] bg-center bg-cover rounded-md flex justify-end p-4 text-white flex-col group cursor-pointer grayscale hover:grayscale-0 transition duration-300"
        >
          <div className="sm:group-hover:visible sm:invisible transition duration-300">
            <h1 className="text-4xl font-lato font-bold">Blandina</h1>
            <p className="text-gray-200 mt-2">
              Blandina, a young Christian from Lyon, endured brutal torture
              during the Roman persecution but remained steadfast in her faith.
              Her unwavering commitment made her a powerful symbol of Christian
              strength and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

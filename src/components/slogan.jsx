import { ScaleAnimation } from "./animation";

export default function Slogan() {
  return (
    <section className="slogan-container my-20 py-10 sm:mx-16 mx-2 rounded-md">
      <ScaleAnimation>
        <h1 className="sm:text-7xl text-5xl font-lato font-extrabold text-center slogan">
          Discover Lyon, a city bursting with vibrant colors and unforgettable
          moments.
        </h1>
      </ScaleAnimation>
    </section>
  );
}

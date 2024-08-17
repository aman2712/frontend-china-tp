export default function Food() {
  return (
    <section className="sm:px-16 px-6 mb-20">
      <p className="flex tracking-widest sm:text-xl text-lg items-center gap-2 font-bold">
        FOOD <span className="w-24 h-1 bg-red-400 rounded-sm"></span>
      </p>
      <h1 className="sm:text-5xl text-3xl font-lato mt-2 font-extrabold">
        Enjoy our vintage <span className="text-red-500">cuisine!</span>
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-10">
        <div className="sm:flex block items-center gap-3 group cursor-pointer">
          <img src="/food/food-1.jpg" alt="Food 1" className="sm:w-48 sm:h-full sm:mb-0 mb-4 object-cover rounded-md" />
          <div>
            <h1 className="text-2xl font-lato font-bold group-hover:text-red-500 duration-300 transition">Bugnes (Angel Wings)</h1>
            <p className="text-md text-gray-500 mt-2">
              Bugnes are typically made with a simple dough of flour, eggs,
              milk, and butter, and are often flavored with lemon zest or orange
              blossom water. The dough is rolled out, cut into strips, and then
              twisted into a distinctive "angel wing" shape before being
              deep-fried until golden brown.
            </p>
          </div>
        </div>
        <div className="sm:flex block items-center gap-3 group cursor-pointer">
          <img src="/food/food-2.jpg" alt="Food 2" className="sm:w-48 sm:h-full sm:mb-0 mb-4 object-cover rounded-md"  />
          <div>
            <h1 className="text-2xl font-lato font-bold group-hover:text-red-500 duration-300 transition">Lyonnaise Desserts (Desserts Lyonnais)</h1>
            <p className="text-md text-gray-500 mt-2">
              Known for their delicate textures and unique flavors, classic
              Lyonnaise desserts include: Lyonnaise Pudding (Pâté de Pâté) and
              Lyonnaise Chocolate Cake (Gâteau de Lyon).
            </p>
          </div>
        </div>
        <div className="sm:flex block items-center gap-3 group cursor-pointer">
          <img src="/food/food-3.jpg" alt="Food 3" className="sm:w-48 sm:h-full sm:mb-0 mb-4 object-cover rounded-md"  />
          <div>
            <h1 className="text-2xl font-lato font-bold group-hover:text-red-500 duration-300 transition">Lyonnaise Bistro Cuisine (Cuisine Lyonnaise)</h1>
            <p className="text-md text-gray-500 mt-2">
              Renowned for its traditional, hearty, and simple dishes, often
              using fresh local ingredients like pork, beef, vegetables, and
              herbs.
            </p>
          </div>
        </div>
        <div className="sm:flex block items-center gap-3 group cursor-pointer">
          <img src="/food/food-4.jpg" alt="Food 4" className="sm:w-48 sm:h-full sm:mb-0 mb-4 object-cover rounded-md"  />
          <div>
            <h1 className="text-2xl font-lato font-bold group-hover:text-red-500 duration-300 transition">Lyonnaise Salad (Salade Lyonnaise)</h1>
            <p className="text-md text-gray-500 mt-2">
              Known for its unique flavor and rich texture, typically containing
              lettuce, bacon, boiled eggs, onions, and vinaigrette dressing,
              sometimes with toasted croutons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

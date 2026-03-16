const Featured = () => {
  return (
    <div className="my-16">
      <div className="flex">
        <span className="border-s-[3rem] rounded-md border-[#DB4444]" />
        <h5 className="ps-3 text-2xl font-bold text-[#DB4444]">Featured</h5>
      </div>

      <h3 className="text-3xl font-bold mt-5 mb-10">New Arrival</h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-2 lg:row-span-2 bg-black text-white rounded-xl p-8 flex flex-col justify-end relative h-[500px]">
          <img
            src="/PlayStation 5.png"
            className="absolute inset-0 w-full h-full object-contain opacity-90"
          />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold">PlayStation 5</h3>
            <p className="text-gray-300 mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>

            <button className="mt-4 underline">Shop Now</button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-black text-white rounded-xl p-8 relative h-[240px] flex items-end">
          <img
            src="/Women’s Collections.jpg"
            className="absolute right-0 bottom-0 h-full object-contain"
          />

          <div className="relative z-10">
            <h3 className="text-xl font-bold">Women's Collections</h3>
            <p className="text-gray-300 text-sm mt-2">
              Featured woman collections that give you another vibe.
            </p>

            <button className="underline mt-3">Shop Now</button>
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-6 relative h-[240px] flex items-end">
          <img
            src="/Speakers.png"
            className="absolute right-3 bottom-0 h-[150px]"
          />

          <div className="relative z-10">
            <h3 className="text-lg font-bold">Speakers</h3>
            <p className="text-gray-300 text-sm">Amazon wireless speakers</p>

            <button className="underline mt-2">Shop Now</button>
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-6 relative h-[240px] flex items-end">
          <img
            src="/Perfume.png"
            className="absolute right-3 bottom-0 h-[150px]"
          />

          <div className="relative z-10">
            <h3 className="text-lg font-bold">Perfume</h3>
            <p className="text-gray-300 text-sm">GUCCI INTENSE OUD EDP</p>

            <button className="underline mt-2">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

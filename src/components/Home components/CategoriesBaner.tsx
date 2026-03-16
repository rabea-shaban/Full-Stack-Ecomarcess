const CategoriesBaner = () => {
  return (
    <div className="my-5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-14 gap-10">
   
        <div className="space-y-6 text-center md:text-left">
          <span className="text-green-400 font-semibold">Categories</span>

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Enhance Your <br /> Music Experience
          </h2>

    
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { num: "23", label: "Hours" },
              { num: "05", label: "Days" },
              { num: "59", label: "Minutes" },
              { num: "35", label: "Seconds" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black text-sm font-semibold">
                {item.num}
                <span className="text-xs font-normal">{item.label}</span>
              </div>
            ))}
          </div>

     
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition">
            Buy Now!
          </button>
        </div>

      
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute w-[500px] h-[500px] bg-gray-700 blur-[120px] opacity-40 rounded-full"></div>

          <img
            src="/CategoriesBaners.png"
            alt="speaker"
            className="relative w-[350px] md:w-[450px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesBaner;

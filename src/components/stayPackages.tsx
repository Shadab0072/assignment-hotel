"use client";

import { assets } from "@/assets";

const packages = [
  {
    title: "Royal Weekend Escape Package",
    subtitle: "From BHD 250 / Per person / 3 Night",
    season: "All season",
    image: assets.weakend_1,
  },
  {
    title: "Family Fun Staycation",
    subtitle: "From BHD 150 / 4 person / 2 Night",
    season: "All season",
    image: assets.weakend_2,
  },
  {
    title: "Luxury Business Suite",
    subtitle: "From BHD 300 / Per person / 2 Night",
    season: "All season",
    image: assets.weakend_3,
  },
];

export default function StayPackages() {
  return (
    <section className="bg-[#f8f3eb] py-36">
      <h1 className="text-6xl font-serif text-center mb-36">Stay packages</h1>

      <div
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4"
        style={{
          scrollSnapType: "x mandatory",
        }}
        onWheel={(e) => {
          const container = e.currentTarget;
          if (e.deltaY !== 0) {
            container.scrollLeft += e.deltaY;
          }
        }}
      >
        {packages.map((item, index) => (
          <div
            key={index}
            className="w-[90vw] md:w-[500px] lg:w-[800px] h-[500px] relative flex-shrink-0 rounded-xl shadow-lg"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="group w-full h-full overflow-hidden relative rounded-xl">
              {/* Background Image */}
              <img
                src={item.image.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6 py-10 text-white z-10 gap-4">
                <span className="text-sm">{item.season}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm">{item.subtitle}</p>

                <div className="flex gap-4 mt-6">
                  <button className="border border-white text-black px-6 py-2 text-sm rounded-full cursor-pointer bg-gray-200 hover:scale-115 backdrop-blur-xl transition-all duration-500 font-semibold">
                    MORE
                  </button>
                  <button className="border border-white p-2 rounded-full hover:scale-115 backdrop-blur-xl cursor-pointer transition-all duration-500">
                    <img src={assets.bagIcon.src} className="w-4" alt="" />
                  </button>
                </div>
              </div>

              {/* White Border */}
              <div className="absolute inset-0 border border-white  opacity-70 z-0 pointer-events-none rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

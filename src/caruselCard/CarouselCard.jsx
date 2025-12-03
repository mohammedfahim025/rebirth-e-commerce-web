// CarouselCard.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import oatmeal from "../assets/1.png";
import oatmeals from "../assets/2.png";
import demo from "../assets/3.png";
import demo2 from "../assets/4.png";

const CarouselCard = () => {
  return (
    <div className="p-5 bg-[#151515] border border-[#363636] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-3xl gap-8">
      {/* ---------- LEFT TEXT SECTION ---------- */}
      <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 px-4">
        <h2 className="text-xl sm:text-2xl text-[#879590] mb-2"></h2>

        <h1 className="text-3xl sm:text-5xl text-white font-bold leading-tight mb-6">
          For any quarry <br /> Contact Us
        </h1>

        {/* Contact & Email */}
        <div className="flex flex-col gap-2 text-white text-sm sm:text-base">
          <span className="font-medium">
            Contact: <span className="font-normal">0187112274</span>
          </span>
          <span className="font-medium">
            Email: <span className="font-normal">rebirth25@gmail.com</span>
          </span>
        </div>
      </div>

      {/* ---------- RIGHT SWIPER IMAGE ---------- */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          loop={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet w-3 h-3 bg-white/40 rounded-full mx-1 transition-all",
            bulletActiveClass:
              "swiper-pagination-bullet-active bg-yellow-400 w-4 h-4",
          }}
        >
          {[oatmeal, oatmeals, demo, demo2].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselCard;

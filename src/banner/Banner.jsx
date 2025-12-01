import videoBanner from "../assets/vedio.MP4"; // video file

const Banner = () => {
  return (
    <div
      className="
        relative
        max-w-[97vw]
        mx-auto
        h-[350px]        /* mobile height */
        md:h-[680px]     /* desktop height */
        overflow-hidden
        rounded-2xl
      "
    >
      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover md:hidden"
      >
        <source src={videoBanner} type="video/mp4" />
      </video>

      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover hidden md:block"
      >
        <source src={videoBanner} type="video/mp4" />
      </video>

      {/* Fallback for slow devices */}
      {/* <img
        src={mobileImg}
        alt="Mobile Banner"
        className="w-full h-full object-cover absolute inset-0 md:hidden opacity-0"
      />
      <img
        src={desktopImg}
        alt="Desktop Banner"
        className="w-full h-full object-cover absolute inset-0 hidden md:block opacity-0"
      /> */}
    </div>
  );
};

export default Banner;

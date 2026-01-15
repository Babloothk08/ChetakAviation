import React from "react";

function VideoComponent() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://pub-46abb921323f4178ae158c624c4e9330.r2.dev/assets/videos/bannernewvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-blue-400">LEARN</span> FLY{" "}
            <span className="text-blue-400">SUCCEED</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transform your aviation dreams into reality at our esteemed pilot training institute, where passion meets precision, and soaring to new horizons becomes second nature.
          </p>

          <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-xl text-lg font-semibold transition cursor-pointer">
            Enquiry Today
          </button>
        </div>
      </div>

    </section>
  );
}

export default VideoComponent;
import React from "react";
import { Link } from "react-router-dom";

function VideoComponent() {
  return (
    <section  className="relative w-full h-screen overflow-hidden">
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
            <span className="text-blue-400">Professional </span> Pilot Training{" "}
            <span className="text-blue-400">at Chetak </span>Aviation
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Build a strong foundation in aviation with DGCA-oriented ground training, experienced instructors, and a disciplined learning environment designed for aspiring pilots.
          </p>

          <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-xl text-lg font-semibold transition cursor-pointer">
            <Link to="/contact">Enquiry Today</Link>
          </button>
        </div>
      </div>

    </section>
  );
}

export default VideoComponent;
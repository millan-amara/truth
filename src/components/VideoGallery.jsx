import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    orientation: "portrait",
  },
    {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    orientation: "landscape",
  },
    {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    orientation: "portrait",
  },
    {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    orientation: "portrait",
  },
    {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    poster: "https://res.cloudinary.com/dcj3qavxy/video/upload/c_limit,h_400,w_600/v1750621697/truth/0040_elwhpb.jpg",
    orientation: "landscape",
  },
    {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/f_webm,vc_vp9/v1750621697/truth/0040_elwhpb",
    orientation: "portrait",
  },

];

export default function VideoGallery() {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Featured Work
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-7xl mx-auto space-y-4">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            src={video.src}
            orientation={video.orientation}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ src, orientation, index }) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  const isFirst = index === 0;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl relative group w-full ${
        orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      {inView && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop={isFirst}
          playsInline
          preload={isFirst ? "auto" : "none"}
          autoPlay={isFirst}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          poster={videoRef.poster}
          onClick={() => {
            if (isMobile && !isFirst) {
              handlePlay();
            }
          }}
          onMouseEnter={() => {
            if (!isMobile && !isFirst) handlePlay();
          }}
          onMouseLeave={() => {
            if (!isMobile && !isFirst) handlePause();
          }}
        />
      )}
    </div>
  );
}



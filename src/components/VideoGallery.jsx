import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637740/truth/0040_teo9pc.mp4",
    orientation: "landscape",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639830/truth/gallery-image/boatey_nofqin.png"
  },
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637784/truth/58_hccfzl.mp4",
    orientation: "portrait",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639832/truth/gallery-image/yellow_zcpuof.png"
  },
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637791/truth/2025-04-16-Nature_zhtjow.mp4",
    orientation: "landscape",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639832/truth/gallery-image/nature_p5hwcb.png"
  },
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637742/truth/00033_sasvoq.mp4",
    orientation: "portrait",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639830/truth/gallery-image/coca_yrzaze.png"
  },

  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750636442/truth/255_ykvzsu.mp4",
    orientation: "portrait",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639830/truth/gallery-image/bikey_aegcdt.png"
  },
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1752000489/truth/Gratitude_kgdtaf.mp4",
    orientation: "landscape",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1752000649/truth/gallery-image/one_odtjxp.png"
  },
  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637774/truth/212_i27pao.mp4",
    orientation: "landscape",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639831/truth/gallery-image/leaf_b1tl7g.png"
  },

  {
    src: "https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637749/truth/45105_bk8qoa.mp4",
    poster: "https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639831/truth/gallery-image/red_dw8yw4.png",
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
            poster={video.poster}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ src, orientation, index, poster }) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  const isFirst = index === 0 || index === 5;

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
          autoPlay='true'
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          poster={poster}
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



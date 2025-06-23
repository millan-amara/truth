import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect device width to disable video autoplay on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

      {/* ✅ Background media */}
      {isDesktop ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dcj3qavxy/video/upload/v1750637740/truth/0040_teo9pc.mp4"
          poster="https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639830/truth/gallery-image/boatey_nofqin.png" // fallback
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dcj3qavxy/image/upload/v1750639830/truth/gallery-image/boatey_nofqin.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* ✅ Optional dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* ✅ Content */}
      <div className="relative z-20">
        <Navbar />

        <section className="h-[calc(100vh-0px)] flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Creative Video Editing That Pops
            </motion.h1>
            <p className="text-lg md:text-xl mb-6">
              Short-form content for TikTok, Reels & YouTube Shorts
            </p>
            <button className="px-6 py-3 bg-fuchsia-700 text-white rounded-md font-semibold hover:bg-fuchsia-800 transition cursor-pointer">
              Wanna Collab? 😎
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;



// import React from "react";
// import Navbar from "./Navbar";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <>
//     <Navbar />

//       <section className="h-screen flex items-center justify-center text-center px-4">
        
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Creative Video Editing That Pops
//           </motion.h1>
//           <p className="text-lg md:text-xl mb-6">
//             Short-form content for TikTok, Reels & YouTube Shorts
//           </p>
//           <button className="px-6 py-3 bg-fuchsia-700 text-white rounded-md font-semibold hover:bg-fuchsia-800 transition cursor-pointer">
//             Let’s Work Together
//           </button>
//         </div>
//       </section>
//       </>
//     // <div className="relative min-h-screen md:bg-black md:text-white overflow-hidden">
//     //   <div 
//     //     className="absolute inset-0 bg-cover bg-center opacity-30"
//     //     style={{ backgroundImage: `url(${Cctv})` }}
//     //   ></div>

//     //   <Navbar />
    
//     // <section className="h-[calc(100vh-30px)] md:text-white flex flex-col justify-center items-center text-center z-20 relative">
//     //   <div className="text-4xl md:text-4xl font-bold mb-4 md:mb-12">
//     //     <span>Better </span>
//     //     <span ref={el} className="auto-type text-red-600 min-h-[3em]"></span>
//     //   </div>
//     //   <p className="text-lg mb-6 md:w-1/2">
//     //     We provide professional WiFi solutions, CCTV installations, and complete network systems for homes and businesses.
//     //   </p>
//     //   <a
//     //     href={`https://wa.me/+254790034459`}
//     //     target="_blank"
//     //     rel="noopener noreferrer"
//     //     className="bg-red-600 md:bg-red-700 font-bold text-white px-4 py-2 rounded-sm hover:bg-red-700"
//     //   >
//     //     Get a Free Quote
//     //   </a>
//     // </section>
//     // </div>
//   );
// };


// export default HeroSection;
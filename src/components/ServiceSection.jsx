import React from "react";

function ServiceSection() {
  return (
      <>
      <Navbar />
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "TikTok/Reels Editing",
              desc: "You shoot, I edit. Get polished, viral-ready videos fast.",
            },
            {
              title: "Full Video Creation",
              desc: "From shoot to final cut—done-for-you content creation.",
            },
            {
              title: "UGC for Brands",
              desc: "Authentic product content created with marketing in mind.",
            },
          ].map((service, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}\

export default ServiceSection;
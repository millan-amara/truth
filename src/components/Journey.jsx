import { motion } from "framer-motion";
import { Video, TrendingUp, Handshake, Paintbrush, SprayCan } from "lucide-react";


const timeline = [
  {
    date: "2015",
    icon: <Paintbrush className="w-5 h-5 text-white" />,
    text: "Began exploring creativity through drawing — the start of a lifelong love for visuals and storytelling.",
  },
  {
    date: "2017",
    icon: <SprayCan className="w-5 h-5 text-white" />,
    text: "Got into spray painting — experimenting with color, motion, and street-style expression.",
  },
  {
    date: "2018",
    icon: <Video className="w-5 h-5 text-white" />,
    text: "Started editing short videos just for fun — learning the tools and finding the flow.",
  },
  {
    date: "2023",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    text: "Built an audience of 20k+ across TikTok & Instagram with consistent creative content.",
  },
  {
    date: "2024",
    icon: <Handshake className="w-5 h-5 text-white" />,
    text: "Started working with brands and creators to deliver high-performing video edits.",
  },
  {
    date: "2026",
    icon: <Handshake className="w-5 h-5 text-white" />,
    text: "Plan - Travel the world, document it all!",
  },
];


export default function JourneySection() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">The Journey So Far</h2>

        <ul className="space-y-12 relative text-left">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full border-l-2 border-fuchsia-700"></div>

          {timeline.map((item, index) => (
            <motion.li
              key={index}
              className="relative pl-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Dot + Icon */}
              <span className="absolute left-3 top-1 w-6 h-6 bg-fuchsia-700 rounded-full flex items-center justify-center shadow-md">
                {item.icon}
              </span>

              <div className="mb-1 text-sm font-semibold text-fuchsia-400">
                {item.date}
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import React from 'react';
import { FaHome, FaStore, FaSchool, FaIndustry } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaComments, FaTools, FaHeadset } from "react-icons/fa";
import ServiceSection from '../components/ServiceSection';
import Navbar from '../components/Navbar';

function Services() {

    return (
      <>
      <Navbar />
      <ServiceSection />

      <section className="p-8 md:py-28 bg-gray-100 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          How We Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="flex justify-center text-4xl text-red-600 mb-4">
              <FaComments />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">1. Consultation</h3>
            <p className="text-gray-600">
              We assess your needs and recommend tailored solutions for your space and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="flex justify-center text-4xl text-green-600 mb-4">
              <FaTools />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">2. Installation</h3>
            <p className="text-gray-600">
              Our technicians handle everything from wiring to configuration with minimal disruption.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="flex justify-center text-4xl text-blue-600 mb-4">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">3. Support</h3>
            <p className="text-gray-600">
              Enjoy reliable post-installation support and system maintenance whenever needed.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 md:py-28 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl text-red-600 mb-3 flex justify-center"><FaHome /></div>
            <p className="font-semibold">Homes & Apartments</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl text-green-600 mb-3 flex justify-center"><FaStore /></div>
            <p className="font-semibold">Retail & Offices</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl text-blue-600 mb-3 flex justify-center"><FaSchool /></div>
            <p className="font-semibold">Educational Institutions</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-3xl text-indigo-600 mb-3 flex justify-center"><FaIndustry /></div>
            <p className="font-semibold">Warehouses & Industrial</p>
          </div>
        </div>
      </section>

      <section className="p-8 md:py-28 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          Why Clients Choose Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Experienced and certified technicians",
            "Modern equipment and tools",
            "Fast turnaround time",
            "Affordable pricing plans",
            "Reliable post-installation support",
          ].map((item, i) => (
            <div key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaCheckCircle className="text-red-600 text-xl mr-3 mt-1" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

    </>
    );
}

export default Services
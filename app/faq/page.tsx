"use client";

import { Accordion } from "@/components/Accordion";
import BannerHeader from "@/components/BannerHeader";
import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Social Media and Family Law",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "Coerced marriage and the law",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "What Is A Family Visa?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "Can anyone give immigration advice?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "What should my attorney expect from me?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "What is the role of witness in court?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "Do I need legal advice just to form my business?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
  {
    title: "What types of business entities are there?",
    content:
      "Lorem ut nisl quam nestibulum drana nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis the monte nascete ridiculus mus morbine fermen.",
  },
];

const FaqPage: React.FC = () => {
  return (
    <div>
      <BannerHeader
        title="Frequently Asked"
        subtitle="Questions"
        caption="Popular questions"
        iconClass="flaticon-courthouse"
        backgroundImage="/slider/4.jpg"
        overlayDark={5}
      />

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 lg:0 py-20 gap-20 items-center">
        <div>
          <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 font-playfair">
            <div className="mb-5">
              <h2 className="text-3xl font-bold  text-gray-900">
                Let's Get In Touch<span className="text-[#ac835d]">.</span>
              </h2>
            </div>

            <form className="space-y-6">
              {/* First + Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Enter your text.."
                  maxLength={300}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 h-32 resize-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac835d] focus:border-transparent transition-all"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1.5">
                  Maximum 300 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ac835d] text-white py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#956f4d] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Submit Form <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>
        <Accordion items={accordionData} />
      </section>
    </div>
  );
};

export default FaqPage;

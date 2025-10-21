"use client";

import Image from "next/image";
import { FaGavel, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  message: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Martin",
    message:
      "Best lawyers in the area. Hard working, attentive, very knowledgeable, ethical. You can’t do better.",
    image: "/team/1.jpg",
    rating: 5,
  },
  {
    name: "James Martin",
    message:
      "These firms exceed client expectations consistently and demonstrate deep business understanding.",
    image: "/team/2.jpg",
    rating: 5,
  },
  {
    name: "Olivia Brown",
    message:
      "Best lawyers in the area. Hard working, attentive, very knowledgeable, ethical. You can’t do better.",
    image: "/team/3.jpg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="testimonials section-padding py-20 bg-[#f8f4f0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-subtitle flex justify-center items-center gap-2 text-[#ac835d] font-medium uppercase tracking-wider">
            <span className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-1">
              <FaGavel className="w-5 h-5 text-white text-xl" />
            </span>
            Our satisfied clients
          </div>
          <h2 className="section-title text-4xl font-bold mt-4">
            What Our <span className="text-[#ac835d]">Clients Say</span>?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="item mt-10 p-10 rounded-md bg-white text-gray-500 shadow-sm transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="info">
                <p className="mb-4 text-gray-500">{t.message}</p>
                <div className="review-title flex items-center">
                  <div className="img w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-900">
                      {t.name}
                    </h6>
                    <div className="icons flex text-[#fd961e] mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-10">
          <div className="section-info">
            {/* <div className="tag text-[#ac835d] font-medium uppercase tracking-wider mb-2">
              Trust
            </div> */}
            <div className="desc text-gray-700 text-lg">
              <span className="bg-[#ac835d] text-white px-4 py-2 rounded-full mr-1">Trust</span> Genuine 1000+ people trusting{" "}
              <span className="border-b-2 border-[#ac835d]">Lawdit</span> law
              firm.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

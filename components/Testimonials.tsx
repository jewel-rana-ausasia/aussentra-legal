// "use client";

// import Image from "next/image";
// import { FaGavel, FaStar } from "react-icons/fa";

// interface Testimonial {
//   name: string;
//   message: string;
//   image: string;
//   rating: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Sarah M.",
//     message: "“Aussentra Legal helped me with my Will. They made everything easy to understand and were very patient. Highly recommend!”",
//     image: "/team/1.jpg",
//     rating: 5,
//   },
//   {
//     name: "James T.",
//     message: " “The team was friendly and guided me through buying my first home. I felt confident every step of the way.”",
//     image: "/team/2.jpg",
//     rating: 5,
//   },
//   {
//     name: "Emily R.",
//     message: " “They handled my dad’s estate with care and respect. I’m grateful for their support during a tough time.”",
//     image: "/team/3.jpg",
//     rating: 5,
//   },
//   {
//     name: "Michael B.",
//     message: " “Great service and clear advice. They helped me resolve a family dispute quickly and without stress.”",
//     image: "/team/4.jpg",
//     rating: 5,
//   },
//   {
//     name: "Lisa K.",
//     message: " “Professional and caring. Aussentra Legal made planning my future simple and stress-free.”",
//     image: "/team/5.jpg",
//     rating: 5,
//   },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section
//       id="testimonials"
//       className="testimonials section-padding px-10 lg:px-0 py-20 bg-[#f8f4f0]"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <div className="section-subtitle flex justify-center items-center gap-2 text-lg text-gray-800 font-medium tracking-wider font-playfair italic">
//             <span className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-1">
//               <Image
//                 src="/balance-icon.svg"
//                 alt="balance-icon"
//                 width={30}
//                 height={30}
//               />
//             </span>
//             Our satisfied clients
//           </div>
//           <h2 className="section-title text-4xl font-bold mt-4 font-playfair">
//             What Our <span className="text-[#ac835d] italic">Clients Say</span>?
//           </h2>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className="item mt-10 p-10 rounded-md bg-white text-gray-500 shadow-sm transition-transform duration-500 hover:-translate-y-1"
//             >
//               <div className="info">
//                 <p className="mb-4 text-gray-500">{t.message}</p>
//                 <div className="review-title flex items-center">
//                   <div className="img w-14 h-14 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       width={56}
//                       height={56}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h6 className="text-lg font-medium text-gray-900 font-playfair">
//                       {t.name}
//                     </h6>
//                     <div className="icons flex text-[#fd961e] mt-1">
//                       {Array.from({ length: t.rating }).map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Info */}
//         <div className="text-center mt-10">
//           <div className="section-info">
//             <div className="desc text-gray-700 text-lg font-playfair italic space-x-1">
//               <span className="not-italic bg-[#ac835d] text-white px-4 py-2 rounded-full">
//                 Trust
//               </span>
//               <span>Genuine 1000+ people trusting</span>
//               <span className="border-b-2 border-[#ac835d]">Aussentra Legal</span>
//               <span>law firm.</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  message: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    message:
      "“Aussentra Legal helped me with my Will. They made everything easy to understand and were very patient. Highly recommend!”",
    image: "/team/1.jpg",
    rating: 5,
  },
  {
    name: "James T.",
    message:
      " “The team was friendly and guided me through buying my first home. I felt confident every step of the way.”",
    image: "/team/2.jpg",
    rating: 5,
  },
  {
    name: "Emily R.",
    message:
      " “They handled my dad’s estate with care and respect. I’m grateful for their support during a tough time.”",
    image: "/team/3.jpg",
    rating: 5,
  },
  {
    name: "Michael B.",
    message:
      " “Great service and clear advice. They helped me resolve a family dispute quickly and without stress.”",
    image: "/team/4.jpg",
    rating: 5,
  },
  {
    name: "Lisa K.",
    message:
      " “Professional and caring. Aussentra Legal made planning my future simple and stress-free.”",
    image: "/team/5.jpg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section
      id="testimonials"
      className="testimonials section-padding px-10 lg:px-0 py-20 bg-[#f8f4f0]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-subtitle flex justify-center items-center gap-2 text-lg text-gray-800 font-medium tracking-wider font-playfair italic">
            <span className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-1">
              <Image
                src="/balance-icon.svg"
                alt="balance-icon"
                width={30}
                height={30}
              />
            </span>
            Our satisfied clients
          </div>
          <h2 className="section-title text-4xl font-bold mt-4 font-playfair">
            What Our <span className="text-[#ac835d] italic">Clients Say</span>?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {currentTestimonials.map((t, idx) => (
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
                    <h6 className="text-lg font-medium text-gray-900 font-playfair">
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

        {/* Pagination Dots (same style as OurSuccesses) */}
        <div className="flex justify-center items-center mt-10 space-x-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full border border-[#ac835d] transition-all duration-300 ${
                currentPage === idx
                  ? "bg-[#ac835d] w-8"
                  : "bg-transparent hover:bg-[#ac835d]/70"
              }`}
            ></button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-10">
          <div className="section-info">
            <div className="desc text-gray-700 text-lg font-playfair italic space-x-1">
              <span className="not-italic bg-[#ac835d] text-white px-4 py-2 rounded-full">
                Trust
              </span>
              <span>Genuine 1000+ people trusting</span>
              <span className="border-b-2 border-[#ac835d]">
                Aussentra Legal
              </span>
              <span>law firm.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

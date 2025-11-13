// "use client";

// import Image from "next/image";
// import React from "react";
// import { FaGavel } from "react-icons/fa";

// interface BannerHeaderProps {
//   title: string;
//   subtitle?: string;
//   caption?: string;
//   iconClass?: string;
//   backgroundImage?: string;
//   overlayDark?: number; // 0–9
// }

// const BannerHeader: React.FC<BannerHeaderProps> = ({
//   title,
//   subtitle,
//   caption,
//   iconClass,
//   backgroundImage,
//   overlayDark,
// }) => {
//   return (
//     <div
//       className="relative flex items-center justify-center h-[40vh] lg:h-[65vh] bg-fixed  bg-center bg-cover lg:bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//       data-overlay-dark={overlayDark}
//     >
//       {/* Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: `rgba(0,0,0,${overlayDark * 0.1})`,
//         }}
//       />z

//       <div className="container relative z-10">
//         <div className="row">
//           <div className="col-md-12 caption  text-center">
//            {/*  <h6 className="inline-flex items-center justify-center font-italic text-white mb-2 text-xl lg:text-2xl">
//               <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mr-1">
//                 <Image
//                   src="/balance-icon.svg"
//                   alt="balance-icon"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//               <div className="font-playfair italic">{caption}</div>
//             </h6> */}
//             <h1 className="text-[30px] lg:text-[48px] text-white relative font-playfair">
//               {title}{" "}
//               {subtitle && (
//                 <span className="italic text-primary">{subtitle}</span>
//               )}
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerHeader;














"use client";

import Image from "next/image";
import React from "react";

interface BannerHeaderProps {
  title: string;
  subtitle?: string;
  caption?: string;
  iconClass?: string;
  backgroundImage: string; // required now
  overlayDark?: number; // 0–9
}

const BannerHeader: React.FC<BannerHeaderProps> = ({
  title,
  subtitle,
  caption,
  backgroundImage,
  overlayDark = 3,
}) => {
  return (
    <section className="relative w-full h-[40vh] lg:h-[65vh] flex items-center justify-center">
      {/* Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlayDark * 0.1})` }}
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-0">
        {caption && (
          <div className="mb-4 text-white italic font-playfair text-lg lg:text-xl">
            {caption}
          </div>
        )}
        <h1 className="text-[28px] lg:text-[48px] font-playfair text-white">
          {title}{" "}
          {subtitle && <span className="text-primary italic">{subtitle}</span>}
        </h1>
      </div>
    </section>
  );
};

export default BannerHeader;

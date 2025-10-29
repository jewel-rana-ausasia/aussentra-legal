"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGavel,
} from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Rhea McKean",
    role: "Criminal Lawyer",
    image: "/team/1.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Martin Brown",
    role: "Family Lawyer",
    image: "/team/2.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sophia Mia",
    role: "Corporate Lawyer",
    image: "/team/3.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Micheal Dan",
    role: "Business Lawyer",
    image: "/team/4.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

const Team: React.FC = () => {
  return (
    <section className="w-full px-5 lg:px-0 py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-20">
          <h2 className="section-title text-2xl lg:text-4xl font-bold mt-2 font-playfair">
            Meet Our <span className="text-primary italic">Legal Team</span>
          </h2>
        </div>

        {/* Team Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="item text-center group">
              <div className="relative overflow-hidden rounded-md transition-transform duration-500 group-hover:scale-95">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-[200px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-full md:h-[300px] object-cover rounded-md mx-auto"
                />
                <div className="social-icons absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-2 bg-primary rounded-full px-3 py-2 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-400">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-white">
                      <FaFacebookF />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-white">
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-white">
                      <FaInstagram />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-white">
                      <FaLinkedinIn />
                    </a>
                  )}
                </div>
              </div>
              <div className="info mt-3 sm:mt-4">
                <h5 className="text-base sm:text-xl font-semibold text-gray-800 font-playfair hover:text-[#ac835d]">
                  <a href="#">{member.name}</a>
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

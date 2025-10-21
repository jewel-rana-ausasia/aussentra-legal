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
    <section className="team section-padding py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-subtitle flex justify-center items-center gap-1 text-[#ac835d] font-medium uppercase tracking-wider">
            <span className="flex items-center justify-center w-10 h-10 bg-[#ac835d] rounded-full mr-2">
              <FaGavel className="w-5 h-5 text-white text-xl" />
            </span>
            Qualified experts
          </div>
          <h2 className="section-title text-4xl font-bold mt-2">
            Meet Our <span className="text-[#ac835d]">Attorneys</span>
          </h2>
        </div>

        {/* Team Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="item text-center group">
              <div className="relative overflow-hidden rounded-md transition-transform duration-500 group-hover:scale-95">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-[300px] object-cover rounded-md"
                />
                <div className="social-icons absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#ac835d] rounded-full px-3 py-2 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-400">
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
              <div className="info mt-4">
                <h5 className="text-xl font-semibold text-gray-900 hover:text-[#ac835d]">
                  <a href="#">{member.name}</a>
                </h5>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

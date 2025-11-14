import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Gul i Ayesha",
    role: "Director Eurasion",
    image: "/Assets/Team/Gul-i-Ayesha.jpg",
    pdf: "/Assets/Opportunities/drGul.pdf",
  },
  {
    name: "Dr. Faisal Javaid",
    role: "Senior Vice President",
    image: "/Assets/Team/faisal javaid.png",
    pdf: "/Assets/Opportunities/Dr.Faisal.pdf",
  },
   {
    name: "Muhammad Asif",
    role: "Researcher",
    image: "/Assets/Team/Muhammad Asif.jpg",
    pdf: "Assets/Opportunities/Muhammad Asif.pdf",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-start items-start p-10 gap-8 flex-wrap">
      {teamMembers.map((member, index) => (
        <Link
          key={index}
          href={member.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          style={{ width: "400px", height: "400px" }}
        >
          <div className="relative w-full h-full group">
            {/* Image with hover blur effect */}
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-all duration-500 group-hover:blur-sm"
            />

            {/* Name + Role stacked below */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center px-3 py-3">
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="font-semibold text-sm text-gray-200">{member.role}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

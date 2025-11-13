import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Gul i Ayesha",
    image: "/Assets/Team/Gul-i-Ayesha.jpg",
    pdf: "/Assets/Opportunities/drGul.pdf",
  },
  {
    name: "Dr. Faisal Javaid",
    image: "/Assets/Team/faisal javaid.png",
    pdf: "/Assets/Opportunities/Dr.Faisal.pdf",
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
          className="block bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          style={{ width: "400px", height: "400px" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                {member.name}
              </span>
              <span className="text-white text-sm mt-2">Open CV (PDF)</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

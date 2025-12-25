import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-start gap-10 p-10">
       <div className="bg-white shadow-lg rounded-2xl p-6 w-[40rem] hover:shadow-xl transition-shadow duration-300">
        {/* <img
          src=""
          alt="CAPES First Intern Cohort"
          className="rounded-xl w-full object-cover"
        /> */}
        <div className="text-center mt-6">
          <Link
            href="/Assets/Opportunities/CAPES-Remote-internship.jpeg"
            target="_blank"
            className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-2 text-lg font-medium"
          >
           {/* Remote Internship Program */}
          </Link>
        </div>
      </div>
      
      {/* Internship Cohort Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[40rem] hover:shadow-xl transition-shadow duration-300">
        <img
          src="/Assets/Opportunities/first-intern-cohort.png"
          alt="CAPES First Intern Cohort"
          className="rounded-xl w-full object-cover"
        />

        <div className="mt-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            CAPES First Intern Cohort — Summer 2025
          </h1>
          <p className="text-gray-600 mt-3 leading-relaxed text-justify">
            CAPES launched its first internship round in summer 2025 from July 7
            to August 31. Students from prominent universities of Pakistan were
            engaged. The organization launched its first-ever initiative to
            engage Southeast Asian students in collaboration with talented
            Pakistani students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

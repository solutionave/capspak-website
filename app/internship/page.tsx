import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className="flex justify-between items-center">
        <div>
      <img
        src="/Assets/Opportunities/first-intern-cohort.png"
        width={550}
        height={550}
        className="mx-auto"
      />
      <h1 className="text-2xl font-bold mt-2 text-center">
        CAPES First Intern Cohort - Summer 2025
      </h1>
</div>
      <Link href="/Assets/Opportunities/CAPES Remote internship.jpeg"
      target="_blank"
      className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-2 text-2xl mr-20"
      >Remote Internship Program</Link>
    </div>
  )
}
export default page

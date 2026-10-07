"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleRedirect = () => {
    setIsVisible(false);
    router.push("/south-central-asia-fellowship");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-[100] p-4
             bg-black/30 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-lg p-2 shadow-lg w-[min(calc(100vw-5rem),calc((100vh-5rem)*1131/1600))]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-5 -right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 hover:text-gray-900 text-3xl leading-none shadow-md"
          aria-label="Close popup"
        >
          &times;
        </button>

        <button onClick={handleRedirect} className="block w-full" aria-label="View South-Central Asia Connectivity Fellowship">
          <img
            src="/Assets/Opportunities/south-central-asia-connectivity-fellowship.jpg"
            alt="South-Central Asia Connectivity Fellowship"
            width={1131}
            height={1600}
            className="w-full h-auto rounded-md"
          />
        </button>
      </div>
    </div>
  );
}

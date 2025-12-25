// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function PopupBanner() {
//   const [isVisible, setIsVisible] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   const handleRedirect = () => {
//     router.push("https://docs.google.com/forms/d/e/1FAIpQLSfurJ2-jB-GWMty9h4Ye1npHKuuxuyzIf2EomxjKqBspd12fw/viewform");
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50
//              bg-transparent backdrop-blur-md"
//     >
//       <div className="bg-white rounded-lg p-4 h-[80vh] w-4/12 relative shadow-lg overflow-hidden">
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-5xl font-bold leading-none"
//           aria-label="Close popup"
//         >
//           &times;
//         </button>

//         <img
//           src="/Assets/pop-up2.jpeg"
//           alt="Pakistan Russia Research Team"
//           className="w-full h-64 md:h-80 lg:h-11/12 object-contain rounded-md mb-6"
//         />

//       </div>
//     </div>
//   );
// }

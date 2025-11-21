// export default function ResearchPublications() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//       <header className="mb-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//                   </h2>
//         <p className="mt-2 text-base text-gray-600">
//           </p>
//       </header>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {DEFAULT_ITEMS.map((item, idx) => (
//           <article
//             key={idx}
//             className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
//           >

//             <div className="flex flex-1 flex-col p-5">
//               <h3 className="text-lg font-semibold leading-snug">
//                 <Link
//                   href={item.href}
//                   target={item.href.startsWith("http") ? "_blank" : "_self"}
//                   className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded"
//                 >
//                   {item.title}
//                 </Link>
//               </h3>

//               <p className="mt-2 text-sm text-gray-600 flex-1">{item.blurb}</p>

//               <div className="mt-4">
//                 <Link
//                   href={item.href}
//                   target={item.href.startsWith("http") ? "_blank" : "_self"}
//                   className="inline-flex items-center rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
//                   aria-label={`Read more: ${item.title}`}
//                 >
//                   Read more
//                   <svg
//                     className="ml-2 h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     aria-hidden="true"
//                   >
//                     <path d="M5 12h14" />
//                     <path d="m12 5 7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

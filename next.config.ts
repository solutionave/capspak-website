import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images straight from /public instead of Vercel's image optimizer.
  // The optimizer's free tier is capped at 5K transformations/month (one per
  // unique image x width x quality), which we exceeded -> /_next/image began
  // returning 402 and every <Image> fell back to its alt text. Source images
  // have been pre-resized to <=1920px and re-encoded, so on-the-fly
  // optimization is no longer needed.
  images: { unoptimized: true },
  outputFileTracingExcludes: {
    "/api/newsletters/route": [
      "./public/Assets/NewsImages/**",
      "./public/Assets/Events/**",
      "./public/Assets/HomePageSlider/**",
      "./public/Assets/weeklynewsmonitor/**",
      "./public/Assets/PolicyBrief/**",
      "./public/Assets/Team/**",
      "./public/Assets/Opportunities/**",
      "./public/Assets/capsthinkpoint/**",
      "./public/Assets/About_bgimg.png",
      "./public/Assets/President_img.JPG",
      "./public/docs/**",
      "./public/logos/**",
    ],
    "/api/weekly-monitor/route": [
      "./public/Assets/NewsImages/**",
      "./public/Assets/Events/**",
      "./public/Assets/HomePageSlider/**",
      "./public/Assets/Newsletter/**",
      "./public/Assets/PolicyBrief/**",
      "./public/Assets/Team/**",
      "./public/Assets/Opportunities/**",
      "./public/Assets/capsthinkpoint/**",
      "./public/Assets/About_bgimg.png",
      "./public/Assets/President_img.JPG",
      "./public/docs/**",
      "./public/logos/**",
    ],
    "/weeklynewsmonitor/page": [
      "./public/Assets/NewsImages/**",
      "./public/Assets/Events/**",
      "./public/Assets/HomePageSlider/**",
      "./public/Assets/Newsletter/**",
      "./public/Assets/PolicyBrief/**",
      "./public/Assets/Team/**",
      "./public/Assets/Opportunities/**",
      "./public/Assets/capsthinkpoint/**",
      "./public/Assets/About_bgimg.png",
      "./public/Assets/President_img.JPG",
      "./public/docs/**",
      "./public/logos/**",
    ],
  },
};

export default nextConfig;

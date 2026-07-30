import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

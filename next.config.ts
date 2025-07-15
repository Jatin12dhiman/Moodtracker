import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //yeh images config batata hai ki kin external domains se image load allowed hai
  images: {
    domains: ["randomuser.me",'images.vexels.com'],
     //  yahan pe external domain add kar diya
  },
};

export default nextConfig;

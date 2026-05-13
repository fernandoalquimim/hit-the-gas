/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "haozfkcitrytokyergca.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/car-images/**",
      },
    ],
  },
};

export default nextConfig;

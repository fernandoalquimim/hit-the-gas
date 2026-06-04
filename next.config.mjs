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
      {
        protocol: "https",
        hostname: "haozfkcitrytokyergca.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/car-brand-logos/**",
      },
    ],
  },
};

export default nextConfig;

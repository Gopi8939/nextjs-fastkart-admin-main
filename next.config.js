/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    // API_PROD_URL: "127.0.0.1:8000/api/",

    //For Production
    API_PROD_URL: "https://fastkart-backend-api.onrender.com/api/",
    
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en/dashboard",

        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      // },
      // {
      //   protocol: "http",
      //   hostname: "127.0.0.1:8000",
      // },
      {
        protocol: "https",
        hostname: "fastkart-backend-api.onrender.com",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;

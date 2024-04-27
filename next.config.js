/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    // API_PROD_URL: "127.0.0.1:8000/api/",

    //For Production
    API_PROD_URL: "https://testapis.aenow.online/api/",
    
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
        hostname: "testapis.aenow.online",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;

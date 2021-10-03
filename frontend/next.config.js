/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/(support)",
        destination: "/discord",
        permanent: true,
      },
    ];
  },
};

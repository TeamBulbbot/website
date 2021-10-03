/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/(discord|support)",
        destination: "https://discord.com/invite/WgEtVqyNFZ",
        permanent: true,
      },
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=868821693571932191&permissions=261955644663&scope=bot+applications.commands",
        permanent: true,
      },
    ];
  },
};

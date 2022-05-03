/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		loader: "akamai",
		path: "",
	},
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.com/invite/WgEtVqyNFZ",
				permanent: true,
			},
			{
				source: "/invite",
				destination: "",
				permanent: true,
			},
			{
				source: "/documentation",
				destination: "https://docs.bulbbot.rocks/getting-started",
				permanent: true,
			},
			{
				source: "/patreon",
				destination: "https://www.patreon.com/bulbbot",
				permanent: true,
			},
			{
				source: "/github",
				destination: "https://github.com/TeamBulbbot/bulbbot",
				permanent: true,
			},
			{
				source: "/twitter",
				destination: "https://twitter.com/BulbbotB",
				permanent: true,
			},
		];
	},

	reactStrictMode: true,
};

module.exports = nextConfig;

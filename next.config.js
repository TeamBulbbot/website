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
				destination: "https://discord.com/oauth2/authorize?client_id=868821693571932191&permissions=1636345249015&scope=bot+applications.commands",
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

	exportTrailingSlash: true,
	reactStrictMode: true,
};

module.exports = nextConfig;

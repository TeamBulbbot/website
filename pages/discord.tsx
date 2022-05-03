import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://discord.com/invite/WgEtVqyNFZ",
			permanent: true,
		},
	};
};

const DiscordPage = (): JSX.Element => {
	return <div></div>;
};

export default DiscordPage;

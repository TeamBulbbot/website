import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://www.patreon.com/bulbbot",
			permanent: true,
		},
	};
};

const PatreonPage = (): JSX.Element => {
	return <div></div>;
};

export default PatreonPage;

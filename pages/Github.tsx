import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://github.com/TeamBulbbot/bulbbot",
			permanent: true,
		},
	};
};

const GithubPage = (): JSX.Element => {
	return <div></div>;
};

export default GithubPage;

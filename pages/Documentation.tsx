import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://docs.bulbbot.rocks/getting-started",
			permanent: true,
		},
	};
};

const DocumentationPage = (): JSX.Element => {
	return <div></div>;
};

export default DocumentationPage;

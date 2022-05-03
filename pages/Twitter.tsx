import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://twitter.com/BulbbotB",
			permanent: true,
		},
	};
};

const TwitterPage = (): JSX.Element => {
	return <div></div>;
};

export default TwitterPage;

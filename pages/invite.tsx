import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		redirect: {
			destination: "https://discord.com/oauth2/authorize?client_id=868821693571932191&permissions=1636345249015&scope=bot+applications.commands",
			permanent: true,
		},
	};
};

const InvitePage = (): JSX.Element => {
	return <div></div>;
};

export default InvitePage;

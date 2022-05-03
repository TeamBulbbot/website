import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { DISCORD_INVITE } from "./constants";

const DiscordPage: NextPage = () => {
	useEffect(() => {
		Router.push(DISCORD_INVITE);
	});

	return (
		<>
			<a href={DISCORD_INVITE} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default DiscordPage;

import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { BOT_INVITE } from "./constants";

const InvitePage: NextPage = () => {
	useEffect(() => {
		Router.push(BOT_INVITE);
	});

	return (
		<>
			<a href={BOT_INVITE} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default InvitePage;

import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { BOT_INVITE, DOCUMENTATION } from "../src/constants";

const DocumentationPage: NextPage = () => {
	useEffect(() => {
		Router.push(DOCUMENTATION);
	});

	return (
		<>
			<a href={DOCUMENTATION} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default DocumentationPage;

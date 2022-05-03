import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { TWITTER } from "./constants";

const TwitterPage: NextPage = () => {
	useEffect(() => {
		Router.push(TWITTER);
	});

	return (
		<>
			<a href={TWITTER} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default TwitterPage;

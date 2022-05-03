import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { GITHUB } from "./constants";

const GithubPage: NextPage = () => {
	useEffect(() => {
		Router.push(GITHUB);
	});

	return (
		<>
			<a href={GITHUB} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default GithubPage;

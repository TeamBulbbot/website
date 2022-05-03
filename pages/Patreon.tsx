import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { PATREON } from "../src/constants";

const PatreonPage: NextPage = () => {
	useEffect(() => {
		Router.push(PATREON);
	});

	return (
		<>
			<a href={PATREON} className="centered">
				Press me if you didnt get redirected
			</a>
		</>
	);
};
export default PatreonPage;

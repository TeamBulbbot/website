import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";

const Home: NextPage = () => {
	const iconHeight: number = 40;
	const iconWidth: number = 40;

	return (
		<div className={styles.container}>
			<Head>
				<title>Bulbbot - The Discord Bot</title>
				<meta name="description" content="Take Discord Moderation to the next level" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Bulbbot - The Discord Bot</h1>
				<p className={styles.description}>We take Discord moderation to the next level</p>

				<Grid container spacing={1} style={{ width: "25em" }}>
					<Grid item xs={2}>
						<a href="/invite" target="_blank" rel="noopener noreferrer">
							<Image src="/discord.svg" height={iconHeight} width={iconWidth} alt="Discord Logo - Invite the bot" />
						</a>
					</Grid>
					<Grid item xs={2}>
						<a href="/discord" target="_blank" rel="noopener noreferrer">
							<Image src="/help.svg" height={iconHeight} width={iconWidth} alt="Help Logo - Invite to our support server" />
						</a>
					</Grid>
					<Grid item xs={2}>
						<a href="/documentation" target="_blank" rel="noopener noreferrer">
							<Image src="/documentation.svg" height={iconHeight} width={iconWidth} alt="Documentation Logo" />
						</a>
					</Grid>
					<Grid item xs={2}>
						<a href="/patreon" target="_blank" rel="noopener noreferrer">
							<Image src="/patreon.svg" height={iconHeight} width={iconWidth} alt="Patreon Logo" />
						</a>
					</Grid>
					<Grid item xs={2}>
						<a href="/github" target="_blank" rel="noopener noreferrer">
							<Image src="/github.svg" height={iconHeight} width={iconWidth} alt="GitHub Logo" />
						</a>
					</Grid>
					<Grid item xs={2}>
						<a href="/twitter" target="_blank" rel="noopener noreferrer">
							<Image src="/twitter.svg" height={iconHeight} width={iconWidth} alt="Twitter Logo" />
						</a>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default Home;

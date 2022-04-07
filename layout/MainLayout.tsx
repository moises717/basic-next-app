import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../components/NavBar";
import styles from "./main.module.css";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Moises Barillas - page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

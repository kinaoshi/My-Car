import Head from "next/head";

import { Header } from "src/components/Header";
import { Array } from "src/components/Array";


export default function Home() {
	return (
		<div className=" container max-w-5xl h-screen">
			<div className="m-6   border-yellow-800 border-2 p-3 rounded-lg bg-yellow-100">
				<div className="text-red-600 text-6xl mt-6 text-left ml-10">BMW 525-d の紹介</div> 

			<Header />
			<Head>
				<title>HOME</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-auto mt-8 mx-10">
				<div className="  h-10 border-2 ">
					<p className="text-blue-600 text-4xl">写真で見る内外装</p>
				</div>
				
			<Array/>
			</main>
			</div>
		</div>
		
	);
}

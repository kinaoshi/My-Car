import Head from "next/head";

import { Header } from "src/components/Header";

export default function Home() {
	const img1 = "/525-1.jpeg";
	const img2 = "/525-2.jpeg";
	const img3 = "/525-3.jpeg";
	const img4 = "/525-4.jpeg";

	return (
		<div>
			<Header/>
			<Head>
				<title>My_Car</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-auto mt-8 mx-10">
				<div className="  h-10 border-2  leading-10">
					<p className="text-red-500 text-4xl">MyCar紹介</p>
				</div>
				<div className="border-2 mt-8 ">
					<div className="flex overflow-x-auto space-x-4  ">
						<a className="" href="/525-1.jpeg" target="_blank">
							<img className="hover:opacity-60  w-32 mx-1 " src={img1} />
						</a>
						<a href="/525-2.jpeg" target="_blank">
							<img className="hover:opacity-60 w-32 mx-1x" src={img2} alt="" />
						</a>
						<a href="/525-3.jpeg" target="_blank">
							<img className="hover:opacity-60 w-32 mx-1" src={img3} />
						</a>
						<a href="/525-4.jpeg" target="_blank">
							<img className="hover:opacity-60 w-32 mx-1" src={img4} />
						</a>
					</div>
				</div>
			</main>
			<div>
				<div className="mt-6 mx-auto max-w-lg max-h-full border-2">
					拡大写真
				</div>
			</div>
		</div>
	);
}

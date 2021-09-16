import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Header } from "src/components/Header";

export default function Home() {
	const img1 = "/525-1.jpeg";
	const img2 = "/525-2.jpeg";
	const img3 = "/525-3.jpeg";
	const img4 = "/525-4.jpeg";

	const [isShow, setIsShow] = useState(true);
	const handlePhoto = () => {
		setIsShow((isShow) => {
			return !isShow;
		});
	};

	return (
		<div>
			<Header />
			<Head>
				<title>Second</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-auto mt-8 mx-10">
				<div className="  h-10 border-2  leading-10">
					<p className="text-green-500 text-4xl">MyCar紹介</p>
				</div>
				<div className="border-2 mt-8 ">
					<p>画像をクリックすると大きくなります</p>

					<div className="flex overflow-x-auto space-x-4  ">
						<span onClick={handlePhoto}>
							<Image className="hover:opacity-60 cursor-pointer"
								src="/525-1.jpeg"
								alt="Picture of the author"
								width={70}
								height={40}
							/>
						</span>

						<span onClick={handlePhoto}>
						<Image className="hover:opacity-60 cursor-pointer"
								src="/525-2.jpeg"
								alt="Picture of the author"
								width={70}
								height={40}
							/>
						</span>

						<span onClick={handlePhoto}>
						<Image className="hover:opacity-60 cursor-pointer"
								src="/525-3.jpeg"
								alt="Picture of the author"
								width={70}
								height={40}
							/>
						</span>

						<span  onClick={handlePhoto}>
						<Image className="hover:opacity-60 cursor-pointer"
								src="/525-4.jpeg"
								alt="Picture of the author"
								width={70}
								height={40}
							/>
						</span>
					</div>
				</div>
			</main>
			<div>
				<div className="mt-6 mx-auto max-w-lg max-h-full border-2">
					<span>{isShow ? <img src={img1} /> : null}</span>
				</div>
			</div>
		</div>
	);
}
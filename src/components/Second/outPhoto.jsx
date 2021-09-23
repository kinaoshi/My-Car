import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Array2 = () => {
	const [items, setItems] = useState([]);
	// useStateの空配列が必要
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState();

	const getItems = useCallback(() => {
		const PHOTOS = [
			{ id: "1", img: "/1.jpeg" },
			{ id: "2", img: "/2.jpeg" },
			{ id: "3", img: "/3.jpeg" },
			{ id: "4", img: "/4.jpeg" },
			{ id: "5", img: "/5.JPG" },
			{ id: "6", img: "/6.JPG" },
			{ id: "7", img: "/7.JPG" },
			
		];
		setItems(PHOTOS);
		setLoading(false);
		setImages("/1.jpeg");
	}, [setItems]);
	// setItems(PHOTOS);とすることによって、items にphotosが入ってくる。
    // [setItems]として、再レンダリングを防ぐ
	useEffect(() => {
		getItems();
	}, [getItems]);
	// getItemsの中身が変われば、もう1度getItemsが走る。

	if (loading) {
		return <div>ローディング中</div>;
	}
	if (items.length === 0) {
		return <div>写真がありません</div>;
	}

	return (
		<>
			<div className="">
				<span className="flex flex-wrap mt-2 ">
					{items.map((item) => {
						return (
							<Image
								key={item.id}
								className="hover:opacity-60 cursor-pointer "
								src={item.img}
								alt="Picture of the author"
								width={70}
								height={45}
								onClick={() => {
									setImages(item.img);
								}}
							/>
						);
					})}
				</span>
			</div>

			<div className="mt-4">
				<img src={images} />
			</div>
		</>
	);
};

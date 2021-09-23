import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const Array3 = () => {
	const [items, setItems] = useState([]);
	// useStateの空配列が必要
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState();

	const getItems = useCallback(() => {
		const PHOTOS = [
			
			{ id: "8", img: "/8.JPG" },
			{ id: "9", img: "/9.JPG" },
			{ id: "10", img: "/10.JPG" },
			{ id: "11", img: "/11.JPG" },
			{ id: "12", img: "/12.JPG" },
			{ id: "13", img: "/13.JPG" },
			{ id: "14", img: "/14.JPG" },
			{ id: "15", img: "/15.JPG" },
			{ id: "16", img: "/16.JPG" },
			{ id: "17", img: "/17.JPG" },
			{ id: "18", img: "/18.JPG" },
		];
		setItems(PHOTOS);
		setLoading(false);
		setImages("/8.JPG");
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

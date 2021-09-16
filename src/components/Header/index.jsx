
import Link from "next/link";

export const Header = () =>  {
	

	return (
		<div className="w-auto mt-8 mx-10">
			<div className="flex ">
				<Link href="/">
					<a className="mx-2">index</a>
				</Link>
				<Link href="/second">
					<a className="mx-2">second</a>
				</Link>
				<Link href="/third">
					<a className="mx-2">third</a>
				</Link>
				<Link href="/fourth">
					<a className="mx-2">fourth</a>
				</Link>
			</div>
		
		</div>
	);
}
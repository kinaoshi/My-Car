
import Link from "next/link";

export const Header = () =>  {


	return (
		<div className="">

			<div className="flex flex-wrap  mt-3 mx-10  h-14 ">
				<div className="">
				<Link href="/">
					<a className="block leading-10 w-20 align-middle text-xl">HOME</a>
				</Link>
				</div>
				<div className="">

				<Link href="/second">
					<a className="block w-20 leading-10 align-middle text-xl ">外観</a>
				</Link>
				</div>
				<div className="">

				<Link href="/third">
					<a className="block w-20 leading-10 align-middle  text-xl">内装</a>
				</Link>
				</div>
				<div className="">

				<Link href="/fourth">
					<a className="block w-20 leading-10 align-middle  text-xl">感想</a>
				</Link>
				</div>
				<div>

				<Link href="/fifth">
					<a className="block w-20 leading-10 align-middle  text-xl">その他</a>
				</Link>
				</div>
			</div>

		</div>
	);
}
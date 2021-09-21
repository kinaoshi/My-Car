
import Link from "next/link";

export const Header = () =>  {
	

	return (
		<div className="">
			
			<div className="flex mt-8 mx-10 border-2 h-14 tracking-wider">
				<div className="w-30 mx-4   border-2">
				<Link href="/">
					<a className="text-xl">HOME</a>
				</Link>
				</div>
				<div className="w-30   mx-4  border-2">

				<Link href="/second">
					<a className="text-xl ">外装</a>
				</Link>
				</div>
				<div className="box-border h-15 w-30  border-2 ">

				<Link href="/third">
					<a className="text-xl">内装</a>
				</Link>
				</div>
				<div className="w-24 ">

				<Link href="/fourth">
					<a className="text-xl mx-4 border-2">fourth</a>
				</Link>
				</div>
				<div>

				<Link href="/fifth">
					<a className="text-xl mx-4 border-2">fifth</a>
				</Link>
				</div>
			</div>
		
		</div>
	);
}
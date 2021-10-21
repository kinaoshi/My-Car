

export const Title = (props) => {
	return (
	
					<div className="flex flex-wrap mt-4">
						<p className="italic xl:hover:bg-purple-300 font-bold font-Arial  text-red-600 text-6xl  text-left ml-10 text-">
							BMW525 d
						</p>
						<p className=" font-bold p-2 text-yellow-900 text-4xl   ml-6">
							{props.title}
						</p>
					</div>

					
		
	);
};
export default Title;

import { useEffect, useRef, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";

function App() {
	const ul = useRef(null);



	function handler(id) {
		if (ul.current) {
			ul.current.classList.toggle("smM:!flex");
		}
	}

	useEffect(() => {


	}, [])

	return (
		<>
			<div className="flex justify-between bg-indigo-900 text-slate-50 h-16 items-center smM:flex-col smM:h-fit smM:py-4">
				<div className="flex items-center ml-4 text-[20px]">Company Name</div>
				<div
					className="sm:hidden h-full flex items-center smM:block"
					onClick={() => {
						handler();
					}}
				>
					<DehazeIcon className="absolute right-11 smM:top-5" />
				</div>
				<div>
					<ul
						className="flex pr-[1.2rem] items-center h-full space-x-6 smM:hidden smM:flex-col smM:text-center smM:m-0 smM:p-0"
						ref={ul}
					>
						<li className="smM:ml-6">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;

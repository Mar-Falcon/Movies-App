import { FC } from "react";
import { DetailCard, Layout, Movies, Series } from "../../components";
import { WithAuth } from "../../hoc";		


const Detail: FC = () => {	
	
	return (
		<Layout>
			<div className="container">
				<div className="w-100">				
					<DetailCard/>
				</div>
				<div className="container d-flex justify-content-center align-items-center">
					<div className="w-100 row">
						<h3 className="text-white mt-5">Also...</h3>
						<Movies/>
						<Series/>
					</div>
				</div>
			</div>
			
		</Layout>
	);
};

export default WithAuth(Detail);


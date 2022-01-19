import { FC } from "react";

const Pagination: FC = () => {

	return(

		<div className="Page navigation example" id="">
			<ul className="pagination justify-content-center">
				<li className="page-item">
					<button className="page-link"> First </button>			
				</li>
				<li className="page-item">
					<button className="page-link"> 1 </button>			
				</li>	
				<li className="page-item">
					<button className="page-link"> 2 </button>			
				</li>	
				<li className="page-item">
					<button className="page-link"> 3 </button>			
				</li>	
				<li className="page-item">
					<button className="page-link"> Last </button>			
				</li>										        
			</ul>
		</div>
	)

};

export { Pagination }
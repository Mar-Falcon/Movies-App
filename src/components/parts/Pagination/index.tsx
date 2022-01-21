import { FC } from "react";
import { useItems } from "../../../hooks/useItems";

const Pagination: FC = () => {

	const { setPageParams, page, lastPage } = useItems();  	

	const nextPage = () =>{		
		setPageParams (page + 1);		
	}
	
	const prevPage = () => {
		if (page > 0){		
			setPageParams (page - 1);
		}
	}
	
	const firtsPage = () =>{		
		setPageParams (1);		
	}

	const goLastPage = () =>{		
		setPageParams (lastPage);		
	}

	return(

		<div className="Page navigation example" id="">
			<ul className="pagination justify-content-center">
				<li className="page-item">
					<button className="page-link" onClick={firtsPage}> First </button>			
				</li>
				<li className="page-item">
					<button className="page-link" onClick={prevPage}> { page - 1 } </button>			
				</li>
				<li className="page-item">
					<button className="page-link active"> { page } </button>			
				</li>
				<li className="page-item">
					<button className="page-link" onClick={nextPage}> { page + 1 } </button>			
				</li>	
				<li className="page-item">
					<button className="page-link" onClick={goLastPage}> Last </button>			
				</li>										        
			</ul>
		</div>
	)

};

export { Pagination }
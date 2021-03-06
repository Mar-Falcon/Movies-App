import { FC, useEffect } from "react";
import { useItems } from "../../../hooks";

const Pagination: FC = () => {

	const { setPageParams, page, lastPage, getSearchMulti, search, setLastPage } = useItems(); 

	useEffect(() => {
		getSearchMulti({page, search}).then((response) => 
		setLastPage(response.total_pages)); 		
	}, [page, search]);
	
	let activeButton = true;

	let disabledFirts; 
	if (page <= 1) disabledFirts = "disabled";

	let disabledLast; 
	if (page === lastPage) disabledLast = "disabled";
	
	const firtsPage = () =>{
		        setPageParams (1);					
			activeButton = false;										
	}
	
	const prevPage = () => {		
		if (page <= 1){				
			activeButton = false;
		}else{
			setPageParams (page - 1);			
		}
	}

	const nextPage = () =>{		
		setPageParams (page + 1);
		if (page === lastPage){
			setPageParams(page);	
			activeButton = false;
		}	
	}	

	const goLastPage = () =>{		
		setPageParams (lastPage);
		activeButton = false;		
	}

	return(

		<div className="Page navigation example pb-2">
			<ul className="pagination justify-content-center">
				<li className={`page-item ${disabledFirts}`}>
					<button className="page-link" onClick={firtsPage} disabled={!activeButton}> First </button>			
				</li>
				<li className={`page-item ${disabledFirts}`} id="prevPage">
					<button className="page-link" onClick={prevPage} disabled={!activeButton}> { page - 1 } </button>			
				</li>
				<li className="page-item active">
					<button className="page-link"> { page } </button>			
				</li>
				<li className={`page-item ${disabledLast}`}>
					<button className="page-link" onClick={nextPage} disabled={!activeButton}> { page + 1 } </button>			
				</li>	
				<li className={`page-item ${disabledLast}`}>
					<button className="page-link" onClick={goLastPage} disabled={!activeButton}> Last </button>			
				</li>										        
			</ul>
		</div>
	)

};

export { Pagination }
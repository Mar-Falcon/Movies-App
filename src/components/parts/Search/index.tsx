import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC} from "react";
import { Item } from "../../../types/models";
import { apiTheMovie } from "../../../utils";

const Search: FC = () =>{		
	
    	const handleChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{  			
		const data = event.target.value; 
		let response;
		console.log(data)		
        	if (data) {
			response = await apiTheMovie.get<Item>(
			  `/search/multi?query=${data}`	 			  	   
			)			
			;
		} else {
			response = await apiTheMovie.get<Item>(
			  `/movie/top_rated?`
			);
		} 		
		return response.data;
    	}	

	return(
	<div className="container">  
		    		<div className="d-flex mb-5 align-items-center">
			    	<span className="text-white me-4">Buscar</span>
				<input className="form-control me-4"  type="text" placeholder="Enter your search" onChange={handleChange}/>			    
			    	<span><FontAwesomeIcon icon={faSearch} className="text-white auto"></FontAwesomeIcon></span>	
		   		</div>  
	</div>
	);
};

export { Search }


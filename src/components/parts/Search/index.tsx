import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC} from "react";

type Props = {
	handleChange: (searchInput: string) => void;
};      

const Search: FC<Props> = ({ handleChange })=>{	   	

	return(
	<div className="container">  
		    		<div className="d-flex mb-5 align-items-center">
			    	<span className="text-white me-4">Buscar</span>
				<input className="form-control me-4"  type="text" placeholder="Enter your search" onChange={(e) => handleChange(e.target.value)}/>			    
			    	<span><FontAwesomeIcon icon={faSearch} className="text-white auto"></FontAwesomeIcon></span>	
		   		</div>  
	</div>
	);
};

export { Search }
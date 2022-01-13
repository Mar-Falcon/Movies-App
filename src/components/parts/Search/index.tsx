import { FC } from "react";

const Search: FC = () =>{	

	const handleChange = () => {       
		
	}
	return(
	<div className="d-flex">       
		<form action="" onChange={handleChange} className="d-flex row">
	    		<div className="">
				<i></i>				
				<input className=""  type="text" placeholder="Enter your search"/>
	   		</div>               
			<div className="">
	    			<button type="submit" className= "btn btn-primary m-auto">SEARCH</button>
	    		</div>
	    
		</form>
    	</div>
	);
};

export { Search }
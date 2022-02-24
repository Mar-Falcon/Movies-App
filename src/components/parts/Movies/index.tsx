import { FC, useEffect } from "react";
import { useAuth, useItemsFB } from "../../../hooks";
import { Card } from "../../common";

const Movies: FC = () => {
	
	const { itemsFB, filterMovies,  deleteMoviesFB } = useItemsFB();

  	const { currentUser, updateUserData } = useAuth();	

	useEffect(() => {
	       filterMovies();								
	}, []);		

	return (	
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">				
				{itemsFB?.map ((item)=>  { return (	
					<div className="col-md-3">				
					<Card item={{...item,
                  				title: item.title || item.name,
                  				release_date: item.release_date || item.first_air_date,
                  				media_type: item.media_type || "movie",                
					}}
          				currentUser={currentUser!}
					updateUserData={updateUserData}
					updateItems={deleteMoviesFB}
         				/>
					</div>
				)})}				
			</div>
		</div>	
	);
};

export { Movies };
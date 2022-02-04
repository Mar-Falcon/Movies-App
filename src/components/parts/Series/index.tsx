import { FC, useEffect } from "react";
import { useItemsFB } from "../../../hooks";
import { Card } from "../..";

const Series: FC = () => {

	const {itemsFB, filterSeries} = useItemsFB();

	useEffect(() => {
	       filterSeries();        								
        }, []);

	return (	
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				
				{itemsFB?.map ((item) =>  {   return (	
					<div className="col-md-3">				
					<Card item={{poster_path:item.poster_path,
						title:item.title || item.name, 
						popularity:item.popularity, 
						id:item.id, idFB:item.idFB, 
						vote_average:item.vote_average,
						overview:item.overview, 
						release_date:item.release_date || item.first_air_date,
						original_language:item.original_language,
						adult:item.adult,
						genre_ids:item.genre_ids,
						original_title:item.original_title,
						backdrop_path:item.backdrop_path,
						vote_count:item.vote_count,
						video:item.video,
						media_type:item.media_type
					}}/>
					</div>
				)})}				
			</div>
		</div>	
	);

};

export { Series };
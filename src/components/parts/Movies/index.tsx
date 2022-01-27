import { FC, useEffect } from "react";
import { useItemsFB } from "../../../hooks";
import { Card } from "../../common";

const Movies: FC = () => {
	
	const {getMoviesFB, itemsFB} = useItemsFB();

        useEffect(() => {
	       getMoviesFB();	
	       console.log(itemsFB);								
        }, []);

	return (	
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				
				{itemsFB?.map ((item)=>  { return (	
					<div className="col-md-3">				
					<Card poster_path={item.poster_path} title={item.title} popularity={item.popularity} id={item.id} overview={item.overview} release_date={item.release_date} original_language={item.original_language} idFB={item.idFB} />
					</div>
				)})}				
			</div>
		</div>	
	);
};

export { Movies };
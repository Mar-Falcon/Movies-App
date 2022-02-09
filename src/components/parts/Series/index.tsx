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
						<Card item={{...item,
							title: item.title || item.name,
							release_date: item.release_date || item.first_air_date,
							media_type: item.media_type || "movie",                
						}}/>
					</div>
				)})}				
			</div>
		</div>	
	);

};

export { Series };
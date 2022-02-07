import { FC, useEffect } from 'react';
import { useItems, useItemsFB } from '../../../hooks';
import { Card } from '../Card';



const Cards: FC = () => {

	const { items } = useItems();

	const { getMoviesFB } = useItemsFB();
	
	useEffect(() => {
		getMoviesFB();										
	}, []);		
	
	return (		
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
			{items?.results.map ((item)=>  { return (				
				<div className="col-md-3" key={item.id}>					
					<Card item={{...item,
                  				title: item.title || item.name,
                  				release_date: item.release_date || item.first_air_date,
                  				media_type: item.media_type || "movie",
               				}}/>
				</div>)})}			
			</div>			
		</div>
	);		
};

export { Cards }

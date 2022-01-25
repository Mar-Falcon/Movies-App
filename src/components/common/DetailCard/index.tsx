import { FC, useEffect } from "react";
import { useItemsFB } from "../../../hooks";

const DetailCard: FC = () => {

	const { itemsFB, getMoviesFB } = useItemsFB();

	useEffect(() => {
		getMoviesFB();								
	}, [itemsFB, getMoviesFB]);	

	return (<>
		{itemsFB?.map ((item)=>  { return (		
		<div className="container d-flex">			
				<div className="card bg-transparent row">					
						<div className="card-body text-white">
							<h2 className="card-title">{item.title}</h2>
							<p className="overvie mt-4">{item.overview}</p>
							<ul className="mt-4">
								<li> original language: {item.original_language}</li>
								<li> Release date: {item.release_date}</li>
							</ul>
							<p className="card-text text-secundary">{item.popularity}</p>
						</div>	
						<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive col-md-5' />					 
					
				</div>
			
		</div>
		)})}
		</>
		
	);
};

export { DetailCard };
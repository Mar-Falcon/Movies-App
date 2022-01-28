import { FC } from "react";
import { useItems } from "../../../hooks";

const DetailCard: FC = () => {

	const { items } = useItems();
	return (		
		<div className="container d-flex">
			{items?.results.map((id)=>  { return (
				<div className="card bg-transparent row">					
						<div className="card-body text-white">
							<h2 className="card-title">{id.title}</h2>
							<p className="overvie mt-4">{id.overview}</p>
							<ul className="mt-4">
								<li> original language: {id.original_language}</li>
								<li> Release date: {id.release_date}</li>
							</ul>
							<p className="card-text text-secundary">{id.popularity}</p>
						</div>	
						<img src={`http://image.tmdb.org/t/p/w500${id.poster_path}`} alt={id.title} className='img-responsive col-md-5' />					 
					
				</div>
				)})
			}
		</div>
		
	);
};

export { DetailCard };
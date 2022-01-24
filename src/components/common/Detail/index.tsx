import { FC } from "react";
import { useItems } from "../../../hooks";
const Detail: FC = () => {

	const { items } = useItems();
	return (		
		<div className="container">
			{items?.results.map ((item)=>  { return (
				<div className="card text-center bg-transparent row">				
					
						<div className="card-body text-white row">
							<h4 className="card-title">{item.title}</h4>
							<p>{item.overview}</p>
							<ul>
								<li> original language: {item.original_language}</li>
								<li> Release date: {item.release_date}</li>
							</ul>
							<p className="card-text text-secundary">{item.popularity}</p>
						</div>	
						<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive col-md-5' />					 
					
				</div>
				)
				}
				)
			}
		</div>
		
	);
};

export { Detail };
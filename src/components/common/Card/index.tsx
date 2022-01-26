import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItemsFB } from '../../../hooks/useItemsFB';
import { Item } from '../../../types';

const Card: FC <Item> = ({title, poster_path, popularity, id, overview, original_language, release_date, adult,backdrop_path,genre_ids, original_title, video, vote_average, vote_count, idFB }) => {
	
	const item = {title, poster_path, popularity, id, overview, original_language, release_date, adult, backdrop_path, genre_ids, original_title, video, vote_average, vote_count, idFB }

	const { addItemsFB, deleteMoviesFB} = useItemsFB();	

	return (
		<Link to="/detail" className="nav-link">		
			<div className="card text-center bg-transparent">		
				<img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='img-responsive' />
				<div className="card-body text-white">
					<h4 className="card-title">{title}</h4>
					<p className="card-text text-secundary">{popularity}</p>									
					<button className="btn btn-outline-secondary" onClick={()=> addItemsFB(item)}> Save </button>
					<button className="btn btn-outline-danger" onClick={()=> deleteMoviesFB(item.idFB)}> Delete </button>					 
				</div>
			</div>
		</Link> 			
	)
}

export { Card };

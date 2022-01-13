import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../types/models';

const Card: FC <Item> = ({title, poster_path, popularity}) => {	
	return (		
		<div className="card text-center bg-transparent">		
			<img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
			<div className="card-body text-white">
				<h4 className="card-title">{title}</h4>
				<p className="card-text text-secundary">{popularity}</p>				
				<Link to="/detail" className="btn btn-outline-secondary"> Details </Link> 
			</div>
		</div>				
	)
}

export { Card };

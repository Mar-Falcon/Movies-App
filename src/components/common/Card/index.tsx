import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../../types';

const Card: FC <Item> = ({title, poster_path, popularity}) => {	
	return (
		<Link to="/detail" className="nav-link">		
			<div className="card text-center bg-transparent">		
				<img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='img-responsive' />
				<div className="card-body text-white">
					<h4 className="card-title">{title}</h4>
					<p className="card-text text-secundary">{popularity}</p>				
					<button className="btn btn-outline-secondary"> Agregar </button> 
				</div>
			</div>
		</Link> 			
	)
}

export { Card };

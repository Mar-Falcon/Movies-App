import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItemsFB } from '../../../hooks/useItemsFB';
import { Item } from '../../../types';

type Props = {
	item: Item
}

const Card: FC <Props> = ({item}) => {	
	
	const { addItemsFB, deleteMoviesFB} = useItemsFB();	

	return (
		<Link to={`/detail/${item.idFB}`}className="nav-link">		
			<div className="card text-center bg-transparent">		
				<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive' />
				<div className="card-body text-white">
					<h4 className="card-title">{item.title || item.name}</h4>
					<p className="card-text text-secundary">{item.popularity}</p>									
					<button className="btn btn-outline-secondary" onClick={()=> addItemsFB(item)}> Save </button>
					<button className="btn btn-outline-danger" onClick={()=> deleteMoviesFB(item.idFB)}> Delete </button>					 
				</div>
			</div>
		</Link> 			
	)
}

export { Card };

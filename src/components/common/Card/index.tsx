import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../../../hooks';
import { useItemsFB } from '../../../hooks/useItemsFB';
import { Item } from '../../../types';

const Card: FC <Item> = ({title, poster_path, popularity, id}) => {	

	const {items} = useItems();

	const { addItemsFB } = useItemsFB();	

	return (
		<Link to="/detail" className="nav-link">		
			<div className="card text-center bg-transparent">		
				<img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='img-responsive' />
				<div className="card-body text-white">
					<h4 className="card-title">{title}</h4>
					<p className="card-text text-secundary">{popularity}</p>
					{items?.results.map ((item)=>  { return (				
					<button className="btn btn-outline-secondary" onClick={()=> addItemsFB(item)}> Agregar </button>
					)})} 
				</div>
			</div>
		</Link> 			
	)
}

export { Card };

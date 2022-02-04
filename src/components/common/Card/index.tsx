import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useItemsFB } from '../../../hooks';
import { Item } from '../../../types';

type Props = {
	item: Item;
}

const Card: FC <Props> = ({item}) => {	
	
	const { addItemsFB, deleteMoviesFB, addMovieUser, removeMovieUser, movieViewed } = useItemsFB();	

	const { currentUser } = useAuth();

	const [hideButton, setHideButton] = useState<boolean>();
	const [hideButton2, setHideButton2] = useState<boolean>();

	useEffect(() => {
		if (hideButton === false && item.idFB === movieViewed){
			setHideButton(false);
			setHideButton2(false)

		} if (hideButton === true && item.idFB !== movieViewed) {
			setHideButton(true);
			setHideButton2(true)

		}
								
	}, [setHideButton, movieViewed]);	

	return (			
		<div className="card text-center bg-transparent mb-2">		
			<Link to={`/detail/${item.idFB}`}className="nav-link">	
			<div className="card-body text-white">
				<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive col-md-9 mb-3 w-100' />
				<h4 className="card-title">{item.title || item.name}</h4>
				<p className="card-text text-secundary">{item.vote_average}</p>													 
			</div>
			</Link> 
			<div className="card-footer border-top-0 bg-transparent">
			{currentUser?.role === 'admin' && (<> 
				<button className="btn btn-outline-secondary" onClick={()=> addItemsFB(item)} hidden={hideButton}> Save </button>
				<button className="btn btn-outline-danger" onClick={()=> deleteMoviesFB(item.idFB)} hidden={!hideButton} > Delete </button> 
				</>)}								
			{currentUser?.role === 'user' && (<> 
				<button className="btn btn-outline-warning" onClick={()=> addMovieUser(item.idFB)} hidden={hideButton} > NoViewed </button>
				<button className="btn btn-outline-warning" onClick={()=> removeMovieUser(item.idFB)} hidden={!hideButton2} > Viewed </button>
			</>)}
			</div>		
		</div>
					
	)
}

export { Card };

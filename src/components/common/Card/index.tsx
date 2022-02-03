import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useItemsFB } from '../../../hooks';
import { Item } from '../../../types';
import { api } from '../../../utils';

type Props = {
	item: Item
}

const Card: FC <Props> = ({item}) => {	
	
	const { addItemsFB, deleteMoviesFB, hideButton } = useItemsFB();

	const { currentUser } = useAuth();	

	const addMovieUser = async (movie: Item) => {
		const prevViewedItems = currentUser?.viewed || []; 
		await api.patch(`/users/${currentUser?.id}.json`, {viewed: [...prevViewedItems, movie]} );
		console.log(currentUser)
	};
	
	/*const removeMovieUser = async (movie: string | undefined) => {
		const updateViewedItems =  currentUser?.viewed?.filter((i) => i !== movie)
	      await api.patch(`users/${currentUser?.id}.json`, {viewed: updateViewedItems, })
	}*/

	return (
		<Link to={`/detail/${item.idFB}`}className="nav-link">		
			<div className="card text-center bg-transparent">		
				<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive' />
				<div className="card-body text-white">
					<h4 className="card-title">{item.title || item.name}</h4>
					<p className="card-text text-secundary">{item.popularity}</p>									
					<button className="btn btn-outline-secondary" onClick={()=> addItemsFB(item)} hidden={hideButton}> Save </button>
					<button className="btn btn-outline-danger" onClick={()=> deleteMoviesFB(item.idFB)} hidden={hideButton} > Delete </button>
					<button className="btn btn-outline" onClick={()=> addMovieUser(item)} hidden={hideButton} > Viewed </button>
					{//<button className="btn btn-outline" onClick={()=> removeMovieUser(item.idFB)} hidden={hideButton} > NoViewed </button>
					}										 
				</div>
			</div>
		</Link> 			
	)
}

export { Card };

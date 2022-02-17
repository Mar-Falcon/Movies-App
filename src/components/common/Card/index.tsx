import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItemsFB } from '../../../hooks';
import { Item, User } from '../../../types';
import { Rating } from '../../parts/StarRating';
import noimage from '../../../assets/img/noimage.jpg';

type Props = {
	item: Item;
  	currentUser?: Partial<User>;
	updateUserData: () => void;
}

const Card: FC <Props> = ({item, currentUser, updateUserData}) => {	
	
	const { addItemsFB, deleteMoviesFB, addMovieUser, removeMovieUser, isMovieViewed,  isMovieInFB, itemsFB } = useItemsFB();	
	
  	const addItems = async (item: Item) => {
    		await addItemsFB(item);		
  	};	

 	const deleteItems = async (id?: number) => {
		const idFB =  itemsFB?.find((item) => item.id === id);
    		await deleteMoviesFB(idFB?.idFB);		   
  	};

  	const addMovie = (user: Partial<User>, id?: string) => {
		updateUserData();
    		addMovieUser(user, id);		
  	};

  	const removeMovie = (user: Partial<User>, id?: string) => {
		updateUserData();
    		removeMovieUser(user, id);		 
  	}; 
	  
	const image = (image: string | undefined) =>
	!image ? noimage : `http://image.tmdb.org/t/p/w500/${image}`;

	return (			
		<div className="card text-center bg-transparent mb-2">		
			<Link to={`/detail/${item.idFB}`}className="nav-link">	
			<div className="card-body text-white">
				<img src={image(item.poster_path)} alt={item.title} className='img-responsive col-md-9 mb-3 w-100' />
				<h4 className="card-title">{item.title || item.name}</h4>
				<div>
				<Rating rating={item.vote_average} />
				</div>
				<p className="card-text text-secundary mt-2">{item.vote_average}</p>													 
			</div>
			</Link> 
			<div className="card-footer border-top-0 bg-transparent">
			{currentUser?.role === 'admin' && !isMovieInFB(item.id) && ( 
				<button className="btn btn-outline-secondary" type="submit" onClick={()=> addItems(item)}> Save </button>)}
			{currentUser?.role === 'admin' && isMovieInFB(item.id) &&( 
				<button className="btn btn-outline-danger" type="submit" onClick={()=> deleteItems(item.id)}> Delete </button> 
			)}								
			{currentUser?.role === 'user' && !isMovieViewed(currentUser, item.idFB) && ( 
				<button className="btn btn-outline-warning" type="submit" onClick={()=> addMovie(currentUser, item.idFB)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> </button> )}
			{currentUser?.role === 'user' && isMovieViewed(currentUser, item.idFB) && (
				<button className="btn btn-outline-warning" type="submit" onClick={()=> removeMovie(currentUser, item.idFB)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> </button>
			)}
			</div>		
		</div>
					
	)
}

export { Card };

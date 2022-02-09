import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItemsFB } from '../../../hooks';
import { Item, User } from '../../../types';

type Props = {
	item: Item;
  currentUser?: Partial<User>;
}

const Card: FC <Props> = ({item, currentUser}) => {	
	
	const { addItemsFB, deleteMoviesFB, addMovieUser, removeMovieUser, isMovieViewed,  isMovieInFB } = useItemsFB();		

  const addItems = async (item: Item) => {
    await addItemsFB(item);
  };

  const deleteItems = async (id?: string) => {
    await deleteMoviesFB(id);
  };

  const addMovie = (user: Partial<User>, id?: string) => {
    addMovieUser(user, id);
  };

  const removeMovie = (user: Partial<User>, id?: string) => {
    removeMovieUser(user, id);    
  };

	return (			
		<div className="card text-center bg-transparent mb-2">		
			<Link to={`/detail/${item.idFB}`}className="nav-link">	
			<div className="card-body text-white">
				<img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className='img-responsive col-md-9 mb-3 w-100' />
				<h4 className="card-title">{item.title || item.name}</h4>
				<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path></svg>
				</div>
				<p className="card-text text-secundary mt-2">{item.vote_average}</p>													 
			</div>
			</Link> 
			<div className="card-footer border-top-0 bg-transparent">
			{currentUser?.role === 'admin' && !isMovieInFB(item.id) && ( 
				<button className="btn btn-outline-secondary" type="submit" onClick={()=> addItems(item)}> Save </button>)}
			{currentUser?.role === 'admin' && isMovieInFB(item.id) &&( 
				<button className="btn btn-outline-danger" type="submit" onClick={()=> deleteItems(item.idFB)}> Delete </button> 
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

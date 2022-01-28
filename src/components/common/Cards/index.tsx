import { FC, useEffect } from 'react';
import { useItems } from '../../../hooks';
import { Card } from '../Card';

const Cards: FC = () => {

	const { items, getSearchMulti, page, search } = useItems();	
	
	useEffect(() => {
		getSearchMulti({page, search});
								
	}, [getSearchMulti, page, search]);	
	
	return (		
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
			{items?.results.map ((item)=>  { return (
				
				<div className="col-md-3" key={item.id}>					
					<Card poster_path={item.poster_path} 
					title={item.title} 
					popularity={item.popularity} 
					id={item.id} idFB={item.idFB} 
					vote_average={item.vote_average} 
					overview={item.overview} 
					release_date={item.release_date} 
					original_language={item.original_language}
					adult={item.adult}
					genre_ids={item.genre_ids} 
					original_title={item.original_title}
					backdrop_path={item.backdrop_path}
					vote_count={item.vote_count}
					video={item.video}
					/>
				</div>)})}			
			</div>			
		</div>
	);		
};

export { Cards }

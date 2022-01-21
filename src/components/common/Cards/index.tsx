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
				<div className="col-md-2" key={item.id}>
					<Card poster_path={item.poster_path} title={item.title} popularity={item.popularity} id={item.id} idDB={item.idDB} vote_average={item.vote_average} />
				</div>)})}			
			</div>			
		</div>
	);		
};

export { Cards }
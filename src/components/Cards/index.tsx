import { FC, useEffect } from 'react';
import { searchMulti } from '../../api';

import { useItems } from '../../hooks/useItems';
import { Card } from '../Card'

const Cards: FC = () => {

	const { items, page, search } = useItems();	
	
	useEffect(() => {
		searchMulti({page, search});						
	}, [page, search,]);	

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

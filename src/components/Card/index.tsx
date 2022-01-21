import React, { FC } from 'react';
import { useItems } from '../../hooks/useItems';

const Card: FC = () => {
	const { items } = useItems();
	return (
		<div className="card">
			{items?.results.map ((item)=>  { return (
			<>{console.log(item)}
				<img src="" alt="" />
				<div className="card-body">
				<h4 className="card-title">My title {item.title}</h4>
				<p className="card-text text-secundary"> {item.release_date}</p>
				<a href="#!" className="btn btn-outline-secondary">
					Go to this website
				</a>
				</div>
			</>
			)})}
		</div>		
	)
}

export {Card};

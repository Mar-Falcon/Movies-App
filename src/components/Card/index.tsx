import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../../hooks/useItems';

const Card: FC = () => {
	const { items } = useItems();
	return (<>
		{items?.results.map ((item)=>  { return (
		<div className="card">			
			{console.log(item)}
				<img src="" alt="" />
				<div className="card-body">
				<h4 className="card-title">{item.title}</h4>
				<p className="card-text text-secundary"> {item.overview}</p>				
				<Link to="/detail" className="btn btn-outline-secondary"> Details </Link> 
				</div>
				</div>
			)})}
		</>		
	)
}

export { Card };

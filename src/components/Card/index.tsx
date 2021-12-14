import React, { FC } from 'react';

const Card: FC = () => {
	return (
		<div className="card">
			<img src="" alt="" />
			<div className="card-body">
				<h4 className="card-title">My title</h4>
				<p className="card-text text-secundary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel natus quam repellat at commodi fuga aut, dolorum itaque eum eius atque quas veritatis consequatur rem excepturi aliquam ullam! Error.</p>
				<a href="#!" className="btn btn-outline-secondary">
					Go to this website
				</a>

			</div>
		</div>
	)
}

export {Card};

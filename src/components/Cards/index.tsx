import React, { FC } from 'react'
import { Card } from '../Card'

const Cards: FC = () => {
	return (
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
				<div className="col-md-4">
					<Card/>
				</div>				
			</div>			
		</div>
	)
}

export { Cards }

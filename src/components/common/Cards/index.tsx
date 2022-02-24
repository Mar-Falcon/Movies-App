import { FC } from 'react';
import { useAuth, useItemsFB } from '../../../hooks';
import { ApiResponse } from '../../../types';
import { Card } from '../Card';

type Props = {
  items: ApiResponse | undefined;  
};

const Cards: FC<Props> = ({ items }) => {

  const { currentUser, updateUserData } = useAuth();

  const { deleteMoviesFB } = useItemsFB();
  	
	return (		
		<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
			{items?.results.map ((item)=>  { return (				
				<div className="col-md-3" key={item.id}>					
					<Card item={{...item,
                  				title: item.title || item.name,
                  				release_date: item.release_date || item.first_air_date,
                  				media_type: item.media_type || "movie",
               				}}
                      			currentUser={currentUser!}
		      			updateUserData={updateUserData}
					updateItems={deleteMoviesFB}		     
                      			/>
				</div>)})}			
			</div>			
		</div>
	);		
};

export { Cards }

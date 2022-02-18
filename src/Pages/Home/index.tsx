import { FC, useEffect, useState } from "react";
import { Card, Layout} from "../../components";
import { WithAuth } from "../../hoc";
import { useAuth, useItemsFB } from "../../hooks";

const Home: FC = () => {
	
	const { itemsFB, getMoviesFB } = useItemsFB();
	
	const { currentUser, updateUserData } = useAuth();	

	const [value,setValue] = useState({});

        useEffect(() => {
		getMoviesFB();								
        }, [value]);	

        const refresh = ()=>{
		setValue({});
	}	
	
	return (		
		<Layout>
			<div className="container d-flex justify-content-center align-items-center h-100">
			<div className="row">
			{itemsFB?.map ((item)=>  { return (				
				<div className="col-md-3" key={item.id}>										
					<Card item={{...item,
                  				title: item.title || item.name,
                  				release_date: item.release_date || item.first_air_date,
                  				media_type: item.media_type || "movie",                
					}}
					currentUser={currentUser!}
					updateUserData={updateUserData}
					refresh={refresh}
					/>
				</div>)})}			
			</div>			
		</div>
		</Layout>
		
	);
};

export default WithAuth(Home);
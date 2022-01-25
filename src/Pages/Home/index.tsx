import { FC, useEffect } from "react";
import { Card, Layout } from "../../components";
import { WithAuth } from "../../hoc";
import { useItemsFB } from "../../hooks";

const Home: FC = () => {

	const {getMoviesFB, itemsFB} = useItemsFB();

	useEffect(() => {
		getMoviesFB();								
	}, [itemsFB, getMoviesFB]);

	return (
		<>
		<Layout>
		<div className="container h-100 row">
			<div className="d-flex justify-content-center align-items-center">
				<div className="col-md-3 row">
		{itemsFB?.map ((item)=>  { return (	
			<Card poster_path={item.poster_path} title={item.title} popularity={item.popularity} id={item.id} overview={item.overview} release_date={item.release_date} original_language={item.original_language} />
		)})}
				</div>
			</div>
		</div>
		</Layout>
		</>
	);
};

export default WithAuth(Home);
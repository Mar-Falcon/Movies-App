import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useItemsFB } from "../../../hooks";

type ParamsType = {
	id: string
}

const DetailCard: FC = () => {
	
	const { getDetail, movieDetail } = useItemsFB();

	const { id } = useParams<ParamsType>();
	
        useEffect(() => {

               getDetail(id); 	      
	       
        },[]);		  

	return (				
		<div className="container">			
				<div className="card bg-transparent">				
						<div className="card-body text-white d-flex">
							<div className="row">
								<div className="col-md-7">
									<h1 className="card-title">{movieDetail?.title}</h1>
									<p className="overvie mt-5">{movieDetail?.overview}</p>
									<ul className="mt-4">
										<li> original language: {movieDetail?.original_language}</li>
										<li> Release date: {movieDetail?.release_date}</li>
									</ul>
									<p className="card-text text-secundary">{movieDetail?.popularity}</p>
								</div>
								<div className="col-md-5">
									<img src={`http://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt={movieDetail?.title} className='img-responsive' />
								</div>
							</div>		
						</div>
								
				</div>
			
		</div>
		
	);
};

export { DetailCard };
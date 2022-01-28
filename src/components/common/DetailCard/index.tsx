import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useItems, useItemsFB } from "../../../hooks";
import { Trailer } from "../../../types/models";

type ParamsType = {
	id: string
}

const DetailCard: FC = () => {
	
	const { getDetail, movieDetail } = useItemsFB();

	const { getMovieTrailer } = useItems();

	const [trailers, setTrailers] = useState<Trailer[]>([]);

	const { id } = useParams<ParamsType>();
	
        useEffect(() => {
               getDetail(id);  	       
        },[]);		
	
	useEffect(()=>{
		getMovieTrailer(movieDetail?.id).then((results) => setTrailers(results))				
	},[movieDetail])

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
									<div className="trailers mt-6"> 
										<h3 className="text-white">Trailers</h3>     
                    								{trailers?.map((video) => (
										<div className="row mt-4">
											<div className="col-md-6 mb-3">
												<iframe
												width="90%"
												height="215"
												src={`https://www.youtube.com/embed/${video.key}`}
												title="YouTube video player"
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
												></iframe>
											</div>
										</div>
										))}        
                    							</div> 			
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
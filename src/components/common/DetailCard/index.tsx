import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useItems, useItemsFB } from "../../../hooks";
import { Trailer } from "../../../types/models";
import { Rating } from '../../parts/StarRating';

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
	       
        },[id]);		
	
	useEffect(()=>{
		getMovieTrailer(movieDetail?.id).then((results) => setTrailers(results))				
	},[movieDetail])

	return (<>
		{movieDetail?.id !== undefined && ( 				
		<div className="card bg-transparent text-white d-flex p-4">				
			<div className="row">
				<div className="car-body col-md-7">
					<h1 className="card-title">{movieDetail?.title || movieDetail?.name}</h1>
					<h4 className="card-title">{movieDetail?.original_title}</h4>
					<div>
					<Rating rating={movieDetail.vote_average} />
					</div>
						<p className="card-text text-secundary mt-2">{movieDetail?.vote_average}</p>
						<p className="overvie mt-3">{movieDetail?.overview}</p>
						<ul className="mt-4">
							<li> original language: {movieDetail?.original_language}</li>
							<li> Release date: {movieDetail?.release_date || movieDetail?.first_air_date}</li>
						</ul>									
					<div className="trailers mt-6"> 
							<h3 className="text-white">Trailers</h3>     
									{trailers?.map((video) => (
						<div className="row mt-4">
							<div className="col-md-6 mb-3">
								<iframe	width="90%" height="215" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
						</div>
						))}        
					</div> 			
				</div>
				<div className="col-md-5">
					<img src={`http://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt={movieDetail?.title} className='img-responsive' />
				</div>												
			</div>		
		</div>)}
		</>
	);
};

export { DetailCard };
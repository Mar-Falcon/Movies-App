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
	       
        },[id]);		
	
	useEffect(()=>{
		getMovieTrailer(movieDetail?.id).then((results) => setTrailers(results))				
	},[movieDetail])

	return (				
		<div className="card bg-transparent text-white d-flex p-4">				
			<div className="row">
				<div className="car-body col-md-7">
					<h1 className="card-title">{movieDetail?.title || movieDetail?.name}</h1>
					<h4 className="card-title">{movieDetail?.original_title}</h4>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="#F7D000"><path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path></svg>
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
		</div>
	);
};

export { DetailCard };
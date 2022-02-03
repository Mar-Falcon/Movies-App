import { useState } from "react";
import { moviesFB } from "../../api";
import { Item } from "../../types";

const useItemsFB = () => {

	const [itemsFB, setItemsFB] = useState<Item[]>();
	const [movieDetail, setMovieDetail] = useState<Item>();

	const addItemsFB = async (datos: Item) => {
		await moviesFB.addMovies(datos);
	}

	const getMoviesFB = async () => {
		const response = await moviesFB.getMovies();
		setItemsFB(response);
	}
	const filterSeries = async () => {
		const response = await moviesFB.getMovies();		
		const series = response.filter((item) => item.media_type !== "movie");		  	
		    if (series) {			
			setItemsFB(series)
		}					    
	}

	const filterMovies = async () => {
		const response = await moviesFB.getMovies();		
		const movies = response.filter((item) => item.media_type === "movie");		  	
		    if (movies) {			
			setItemsFB(movies)
		}					    
	}

	const deleteMoviesFB = async (idFB: string | undefined) =>{
		if (window.confirm("Are you sure you want to delete this movie?")){
			 await moviesFB.deleteMovies(idFB);	
		}
	}

	const getDetail = async (idFB: string) => {
		const detail = await moviesFB.getMovieIdFB(idFB);
		setMovieDetail(detail.data);
	}

	return { addItemsFB, getMoviesFB, itemsFB, deleteMoviesFB, getDetail, movieDetail, setMovieDetail, filterMovies, filterSeries };

}

export { useItemsFB }
import { useState } from "react";
import { useAuth } from "..";
import { moviesFB } from "../../api";
import { Item } from "../../types";
import { api } from "../../utils";

const useItemsFB = () => {

	const [itemsFB, setItemsFB] = useState<Item[]>();
	const [movieDetail, setMovieDetail] = useState<Item>();	
		
	const { currentUser, UpdateUserData } = useAuth();
	
	const addItemsFB = async (datos: Item) => {		
		await moviesFB.addMovies(datos);
		await getMoviesFB();
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
		};
		await getMoviesFB();						
	}

	const getDetail = async (idFB: string) => {
		const detail = await moviesFB.getMovieIdFB(idFB);
		setMovieDetail(detail.data);		
	}

	const isMovieInFB = (id?: string ) => {						
		const isMovieIn = itemsFB?.find((item) => item.idFB === id);
		console.log(isMovieIn)	
		return isMovieIn;				     
	}	
	
	const addMovieUser = async (movie: string | undefined) => {
		const viewedItems = currentUser?.viewed || []; 
		await api.patch(`/users/${currentUser?.id}.json`, {viewed: [...viewedItems, movie]});
		UpdateUserData();				
	};
	
	const removeMovieUser = async (movie: string | undefined) => {
		const viewedItems =  currentUser?.viewed?.filter((i) => i !== movie)
		await api.patch(`users/${currentUser?.id}.json`, {viewed: viewedItems, })
		UpdateUserData();	      	      
	}

	const isMovieViewed = (idFB: string | undefined) => {
		const viewed = currentUser?.viewed?.find((i) => i === idFB);		
		return viewed;
	}
	
	return { addItemsFB, getMoviesFB, itemsFB, deleteMoviesFB, getDetail, movieDetail, setMovieDetail, filterMovies, filterSeries, addMovieUser, removeMovieUser, isMovieViewed, isMovieInFB };

}

export { useItemsFB }
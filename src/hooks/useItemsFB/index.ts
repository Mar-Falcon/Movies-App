import { useState } from "react";
import { moviesFB } from "../../api/moviesFireBase";
import { ItemFB } from "../../types";

const useItemsFB = () => {

	const [itemsFB, setItemsFB] = useState<ItemFB[]>();

	const addItemsFB = async (datos: ItemFB) => {
		await moviesFB.addMovies(datos);
	}

	const getMoviesFB = async () => {
		const response = await moviesFB.getMovies();
		setItemsFB(response);
	}

	const deleteMoviesFB = async (id: string) =>{
		if (window.confirm("are you sure you want to delete this user?")){
			 await moviesFB.deleteMovies(id);	
		}
	}

	return { addItemsFB, getMoviesFB, itemsFB, deleteMoviesFB};

}

export { useItemsFB }
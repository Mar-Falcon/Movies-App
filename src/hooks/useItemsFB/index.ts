import { useState } from "react";
import { moviesFB } from "../../api/moviesFireBase";
import { Item } from "../../types";

const useItemsFB = () => {

	const [itemsFB, setItemsFB] = useState<Item[]>();

	const addItemsFB = async (datos: Item) => {
		await moviesFB.addMovies(datos);
	}

	const getMoviesFB = async () => {
		const response = await moviesFB.getMovies();
		setItemsFB(response);
	}

	const deleteMoviesFB = async (idFB: string | undefined) =>{
		if (window.confirm("Are you sure you want to delete this movie?")){
			 await moviesFB.deleteMovies(idFB);	
		}
	}

	return { addItemsFB, getMoviesFB, itemsFB, deleteMoviesFB};

}

export { useItemsFB }
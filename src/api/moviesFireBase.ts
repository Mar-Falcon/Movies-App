import { mapToArrayFB } from "../helpers";
import { Item } from "../types";
import { api } from "../utils";

const getMovies = async (): Promise<Item[]> => {
	const response = await api.get("/movies.json");
	return mapToArrayFB(response.data);
};
      
const addMovies= async (payload: Item) => {
	await api.post("/movies.json", payload);
};
      
const deleteMovies = async (idFB: string | undefined) => {
	await api.delete(`/movies/${idFB}.json`);
}
      
export const moviesFB = { getMovies, addMovies, deleteMovies };
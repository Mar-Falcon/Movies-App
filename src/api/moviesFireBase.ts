import { mapToArray } from "../helpers";
import { Item, ItemFB } from "../types";
import { api } from "../utils";

const getMovies = async (): Promise<Item[]> => {
	const response = await api.get("/movies.json");
	return mapToArray(response.data);
};
      
const addMovies= async (payload: ItemFB) => {
	await api.post("/movies.json", payload);
};
      
const deleteMovies = async (id: string) => {
	await api.delete(`/movies/${id}.json`);
}
      
export const moviesFB = { getMovies, addMovies, deleteMovies };
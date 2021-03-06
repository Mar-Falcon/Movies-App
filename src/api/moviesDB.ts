import { ApiResponse } from "../types";
import { Filter } from "../types";
import { apiTheMovie } from "../utils";

const getMoviesFilter = async ({page, search}: Filter): Promise<ApiResponse> => {
	const response = await apiTheMovie.get<ApiResponse>(
		`/search/multi?query=${search}&page=${page}`
	);
	return response.data;
};

const getMovies = async ({page}: Filter): Promise<ApiResponse> =>{
	const response = await apiTheMovie.get<ApiResponse>(
		`/movie/top_rated?page=${page}`
	);
	return response.data;
}

const getVideo = async (id: number | undefined) => {
	const response = await apiTheMovie.get(
		`/movie/${id}/videos`
	);
	return response.data.results;
}
      
export const searchMulti = { getMoviesFilter, getMovies, getVideo };
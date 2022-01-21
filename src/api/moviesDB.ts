import { ApiResponse } from "../types";
import { Filter } from "../types";
import { apiTheMovie } from "../utils";

const searchMulti = async ({page, search}: Filter): Promise<ApiResponse> => {
	let response;
	if (search) {
	  response = await apiTheMovie.get<ApiResponse>(
	    `/search/multi?query=${search}&page=${page}`
	  );
	} else {
	  response = await apiTheMovie.get<ApiResponse>(
	    `/movie/top_rated?page=${page}`
	  );
	}
	return response.data;
};
      
export {  searchMulti }
import axios from "axios";

const api = axios.create({
	baseURL: "https://moviesapp-6eb16-default-rtdb.firebaseio.com/",

});

const apiTheMovie = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
	  api_key: "8cf3b3ed805edd61876f9676282f15e0",
	}
});

export { api, apiTheMovie };
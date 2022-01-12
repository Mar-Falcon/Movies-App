import axios from "axios";

const api = axios.create({
	baseURL: "https://moviesapp-6eb16-default-rtdb.firebaseio.com/",

});

export { api };
import axios from "axios";

const api = axios.create({
	baseURL: "https://todoapp-b6fb1-default-rtdb.firebaseio.com",

});

export { api };
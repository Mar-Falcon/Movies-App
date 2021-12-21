import { api } from "../../../utils";

type Payload = {
	name: string;
	lastName: string;
	email:string;

};

const signup = async (data: Payload) => {
	await api.post("/users.json", data);
      };
      
export { signup };
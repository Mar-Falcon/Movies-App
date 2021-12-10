import { api } from "../../../utils";

type Payload = {
	name: string;
	lastName: string;
	email:string;
	password: string;
	birthdate: Date;
};

const signup = async (data: Payload) => {
	await api.post("/users.json", data);
      };
      
export { signup };
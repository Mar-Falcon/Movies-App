import { User } from "../../../types";
import { api } from "../../../utils";

type Payload = Omit<User, 'id'>

const signup = async (data: Payload) => {
	await api.post("/users.json", data);
      };
      
export { signup };
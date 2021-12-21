import { usersApi } from "../../api/users";
import { AddUserType } from "../../types"

const useUsers = () => {
	const addUser = async (datos: AddUserType) => {
		await usersApi.addUser(datos);

	}

	const getUsers = async () => {
		await usersApi.getUsers();
	}
	
	return { addUser, getUsers};

}

export { useUsers }
import { useState } from "react";
import { usersApi } from "../../api/users";
import { AddUserType, User } from "../../types"

const useUsers = () => {

	const [users, setUsers] = useState<User[]>();

	const addUser = async (datos: AddUserType) => {
		await usersApi.addUser(datos);
	}

	const getUsers = async () => {
		const response = await usersApi.getUsers();
		setUsers(response);
	}

	const deleteUser = async (id: string) =>{
		if (window.confirm("are you sure you want to delete this user?")){
			 await usersApi.deleteUser(id);	
		}
	}



	return { addUser, getUsers, users, deleteUser};

}

export { useUsers }
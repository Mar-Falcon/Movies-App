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

	return { addUser, getUsers, users};

}

export { useUsers }
import { useEffect, FC } from "react";
import { useUsers } from "../../../hooks/useUsers";
import { AddUserType } from "../../../types";

const UsersTable: FC = () => {

	const { users, getUsers } = useUsers();

	useEffect(() => {
		getUsers();		
	}, []);

	return(
		<table className="container table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">LastName</th>
					<th scope="col">Email</th>
					<th scope="col">Birthdate</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user: AddUserType) => (
				<tr>					
					<td>{user.name}</td>
					<td>{user.lastName}</td>
					<td>{user.email}</td>
					<td>{user.birthdate}</td>
					<td>{} <button className="btn btn-danger">Eliminar</button></td>
				</tr>
				))}			
			</tbody>
		</table>
	);
};

export { UsersTable };
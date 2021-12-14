import { useEffect, FC } from "react";
import { convertDateFormat } from "../../../helpers";
import { useUsers } from "../../../hooks";

const UsersTable: FC = () => {

	const { users, getUsers, deleteUser } = useUsers();		

	useEffect(() => {
		getUsers();
								
	}, [getUsers, users]);		

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
				{users?.map((user) => (
				<tr>					
					<td>{user.name}</td>
					<td>{user.lastName}</td>
					<td>{user.email}</td>
					<td>{convertDateFormat(user.birthdate)}</td>
					<td><button className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Eliminar</button></td>
				</tr>
				))}			
			</tbody>
		</table>
	);
};

export { UsersTable };
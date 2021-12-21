import { faStoreAltSlash, faTrash, faTrashAlt, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, FC } from "react";
import { convertDateFormat } from "../../../helpers";
import { useUsers } from "../../../hooks";

const UsersTable: FC = () => {

	const { users, getUsers, deleteUser } = useUsers();		

	useEffect(() => {
		getUsers();
								
	}, [getUsers, users]);		

	return(
		<div className="container">
		<table className="table">
			<thead>
				<tr className="col">
					<th scope="col">Name</th>
					<th scope="col">LastName</th>
					<th scope="col">Email</th>
					<th scope="col">Birthdate</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user) => (
				<tr className="col">					
					<td>{user.name}</td>
					<td>{user.lastName}</td>
					<td>{user.email}</td>
					<td>{convertDateFormat(user.birthdate)}</td>
					<td><button className="btn btn-danger" onClick={()=> deleteUser(user.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
				</tr>
				))}			
			</tbody>
		</table>
		</div>
	);
};

export { UsersTable };
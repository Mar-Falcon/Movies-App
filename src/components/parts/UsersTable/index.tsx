import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, FC } from "react";
import { convertDateFormat } from "../../../helpers";
import { useUsers } from "../../../hooks";

const UsersTable: FC = () => {

	const { users, getUsers, deleteUser } = useUsers();		

	useEffect(() => {
		getUsers();								
	}, []);		

	return(
		<div className="container">
		<table className="table">
			<thead>
				<tr className="col">
					<th scope="col" className="text-white">Name</th>
					<th scope="col" className="text-white">LastName</th>
					<th scope="col" className="text-white">Email</th>
					<th scope="col" className="text-white">Birthdate</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user) => (
				<tr className="col">					
					<td className="text-light">{user.name}</td>
					<td className="text-light">{user.lastName}</td>
					<td className="text-light">{user.email}</td>
					<td className="text-light">{convertDateFormat(user.birthdate)}</td>
					<td className="text-light"><button className="btn btn-danger" onClick={()=> deleteUser(user.id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button></td>
				</tr>
				))}			
			</tbody>
		</table>
		</div>
	);
};

export { UsersTable };
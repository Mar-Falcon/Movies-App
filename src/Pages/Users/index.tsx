import { FC } from "react";
import { Layout, UsersTable } from "../../components";
import { WithAuth } from "../../hoc";

const Users: FC = () => {
	
	return (
		<Layout>
			<UsersTable/>
		</Layout>
	);
};

export default WithAuth(Users);
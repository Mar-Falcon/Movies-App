import { FC } from "react";
import { Layout, UsersTable } from "../../components";

const Users: FC = () => {
	return (
		<Layout>
			<UsersTable/>
		</Layout>
	);
};

export { Users };
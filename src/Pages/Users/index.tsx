import { FC } from "react";
import { UsersTable } from "../../components";
import { Layout } from "../../components/layout";

const Users: FC = () => {
	return (
		<Layout>
			<UsersTable/>
		</Layout>
	);
};

export { Users };
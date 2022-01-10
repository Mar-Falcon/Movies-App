import { FC } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";

const Admin: FC = () => {
	return (
		<Layout>
		<div>Admin</div>
		</Layout>
	);
};

export default WithAuth(Admin);
import { FC } from "react";
import { Cards, Layout, Search } from "../../components";
import { WithAuth } from "../../hoc";

const Admin: FC = () => {
	return (
		<>
		<Layout>
			<Search/>
			<Cards/>
		</Layout>
		</>
	);
};

export default WithAuth(Admin);
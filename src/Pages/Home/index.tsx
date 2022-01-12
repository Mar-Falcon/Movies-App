import { FC } from "react";
import { Cards, Layout } from "../../components";
import { WithAuth } from "../../hoc";

const Home: FC = () => {
	return (
		<>
		<Layout>
			<Cards/>
		</Layout>
		</>
	);
};

export default WithAuth(Home);
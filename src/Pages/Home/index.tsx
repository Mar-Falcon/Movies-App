import { FC } from "react";
import { Cards } from "../../components";
import { Layout } from "../../components/layout";

const Home: FC = () => {
	return (
		<>
		<Layout>
			<Cards/>
		</Layout>
		</>
	);
};

export { Home };
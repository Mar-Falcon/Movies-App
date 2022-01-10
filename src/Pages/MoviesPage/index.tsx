import { FC } from "react";
import { Layout, Movies } from "../../components";
import { WithAuth } from "../../hoc";

const MoviesPage: FC = () => {
	return (
		<Layout>
			<Movies/>
		</Layout>
	);
};

export default WithAuth(MoviesPage);
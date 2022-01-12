import { FC } from "react";
import { Layout, Series } from "../../components";
import { WithAuth } from "../../hoc";

const SeriesPage: FC = () => {
	return (
		<Layout>
			<Series/>
		</Layout>
	);
};

export default WithAuth(SeriesPage);
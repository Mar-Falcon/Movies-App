import { FC } from "react";
import { Detail, Layout } from "../../components";
import { WithAuth } from "../../hoc";

const DetailPage: FC = () => {
	
	return (
		<Layout>
			<Detail/>
		</Layout>
	);
};

export default WithAuth(DetailPage);
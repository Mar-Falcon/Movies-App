import { FC } from "react";
import { DetailCard, Layout } from "../../components";
import { WithAuth } from "../../hoc";

const Detail: FC = () => {
	
	return (
		<Layout>
			<DetailCard/>
		</Layout>
	);
};

export default WithAuth(Detail);
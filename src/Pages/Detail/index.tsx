import { FC } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";

const Detail: FC = () => {
	return (
		<Layout>
		<div>Detail</div>
		</Layout>
	);
};

export default WithAuth(Detail);
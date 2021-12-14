import { FC } from "react";
import { AddUsers } from "../../components";
import { Layout } from "../../components/layout";

const SignUp: FC = () => {
	return (
		<>
		<Layout>
			<AddUsers/>
		</Layout>
		</>
	);
};

export { SignUp };
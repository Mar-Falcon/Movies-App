import { FC } from "react";
import { LoginUser } from "../../components";
import { WithAuth } from "../../hoc";

const Login: FC = () => {

	
	return (
		<>
		<LoginUser/>
		</>
	);
};

export default WithAuth( Login );
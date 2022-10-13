import { FC } from "react";
import { LoginUser } from "../../components";
import { WithAuth } from "../../hoc";

const Login: FC = () => {

	
	return (
		<>
		<div className="container mt-5">
		<LoginUser/>
		</div>
		</>
	);
};

export default WithAuth( Login );
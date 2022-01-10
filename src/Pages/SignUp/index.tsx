import { FC } from "react";
import { AddUsers } from "../../components";
import { WithAuth } from "../../hoc";

const SignUp: FC = () => {
	return (
		<>
			<div className="container d-flex justify-content-center align-items-center h-100">				
				<div className="card-body">
					<h1 className="text-white d-flex justify-content-center">Cinem<em>ADA</em></h1>
					<AddUsers/>
				</div>		
			</div>				
		</>
	);
};

export default WithAuth(SignUp);
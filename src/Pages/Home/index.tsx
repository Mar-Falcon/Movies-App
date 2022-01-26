import { FC } from "react";
import { Layout, Movies } from "../../components";
import { WithAuth } from "../../hoc";

const Home: FC = () => {	

	return (		
		<Layout>
			<Movies/>
		</Layout>
		
	);
};

export default WithAuth(Home);
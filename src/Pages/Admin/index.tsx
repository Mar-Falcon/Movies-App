import { FC } from "react";
import { Cards, Layout, Search } from "../../components";
import { WithAuth } from "../../hoc";
import { useItems } from "../../hooks/useItems";

const Admin: FC = () => {

	const { setSearchParams } = useItems();

	return (
		<>
		<Layout>
			<Search handleChange={setSearchParams}/>
			<Cards/>
		</Layout>
		</>
	);
};

export default WithAuth(Admin);
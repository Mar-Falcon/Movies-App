import { FC } from "react";
import { Cards, Layout, Search } from "../../components";
import { WithAuth } from "../../hoc";
import { useItems } from "../../hooks/useItems";

const Admin: FC = () => {

	const { setSearch } = useItems();

	return (
		<>
		<Layout>
			<Search handleChange={setSearch}/>
			<Cards/>
		</Layout>
		</>
	);
};

export default WithAuth(Admin);
import { FC } from "react";
import { Cards, Layout, Pagination, Search } from "../../components";
import { WithAuth } from "../../hoc";
import { useItems } from "../../hooks";

const Admin: FC = () => {

	const { setSearchParams } = useItems();	

	return (
		<>
		<Layout>
			<Search handleChange={setSearchParams}/>
			<Cards/>
			<Pagination/>
		</Layout>
		</>
	);
};

export default WithAuth(Admin);
import { FC, useEffect } from "react";
import { Cards, Layout, Pagination, Search } from "../../components";
import { WithAuth } from "../../hoc";
import { useItems } from "../../hooks";

const Admin: FC = () => {

	const { items, getSearchMulti, page, search, setSearchParams } = useItems();
	
	useEffect(() => {
		getSearchMulti({ page, search });
	}, [page, search]);

	const refresh = ()=>{}	

	return (
		<>
		<Layout>
			<Search handleChange={setSearchParams}/>
			<Cards items={items} refresh={refresh}/>
			<Pagination/>
		</Layout>
		</>
	);
};

export default WithAuth(Admin);
import { FC, useEffect } from "react";
import { Cards, Layout, Pagination, Search } from "../../components";
import { WithAuth } from "../../hoc";
import { useItems } from "../../hooks";

const Admin: FC = () => {

	const { setSearchParams, getSearchMulti, page, search } = useItems();	

	useEffect(() => {
		getSearchMulti({page, search});	
	}, []);	
		
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
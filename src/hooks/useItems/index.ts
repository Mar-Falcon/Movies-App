import { useEffect, useState } from "react";
import { searchMulti } from "../../api";
import { ApiResponse } from "../../types";

const useItems = () => {
	const params = new URLSearchParams(window.location.search);
	const page = parseInt(params.get("page")!) || 1;
	const search = params.get("search") || undefined;

	const [items, setItems] = useState<ApiResponse>();
    
	useEffect(() => {
		searchMulti({page, search}).then((response) => 
		setItems(response));		
		
	}, [page, search]);

	return { page, search, items };
}

export { useItems };
import {  useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchMulti } from "../../api";
import { ApiResponse } from "../../types";
//import { apiTheMovie } from "../../utils";

const useItems = () => {
	const params = new URLSearchParams(window.location.search);
	const page = parseInt(params.get("page")!) || 1;
	const search = params.get("search") || undefined;

	const {push} = useHistory();

	const [items, setItems] = useState<ApiResponse>();
	
	const setSearch = (s: string) => {
		params.set("search", s);     
		push(`${window.location.pathname}?${params.toString()}`);
	      };
    
	useEffect(() => {
		searchMulti({page, search}).then((response) => 
		setItems(response));	
		
	}, [page, search]);

	return { page, search, items, setItems, setSearch};
}

export { useItems };
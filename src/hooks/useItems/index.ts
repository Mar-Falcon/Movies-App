import {  useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchMulti } from "../../api";
import { ApiResponse, Filter } from "../../types";

const useItems = () => {
	const params = new URLSearchParams(window.location.search);
	const page = parseInt(params.get("page")!) || 1;
	const search = params.get("search") || undefined;

	const {push} = useHistory();

	const [items, setItems] = useState<ApiResponse>();

	const getSearchMulti = async ({page, search}: Filter) => {
		let response;		
		if (search) {
		  response = await searchMulti.getMoviesFilter({page, search});		  	  
		} else {
		  response = await searchMulti.getMoviesRandon({page, search});
		};
		return response;		
	};
	
	const setSearchParams = (searchInput: string) => {
		params.set("search", searchInput);     
		push(`${window.location.pathname}?${params.toString()}`);
	};
    
	useEffect(() => {
		getSearchMulti({page, search}).then((response) => 
		setItems(response));			
	}, [page, search]);

	return { page, search, items, setItems, setSearchParams, getSearchMulti};
}

export { useItems };
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
	const [lastPage, setLastPage] = useState(1)

	const getSearchMulti = async ({page, search}: Filter) => {
		let response;		
		if (search) {
		  response = await searchMulti.getMoviesFilter({page, search});		  	  
		} else {
		  response = await searchMulti.getMovies({page, search});
		};
		return response;		
	};
	
	const setSearchParams = (searchInput: string) => {
		params.set("search", searchInput);     
		push(`${window.location.pathname}?${params.toString()}`);
	};

	const setPageParams = (newPage: number) => {
		params.set("page", newPage.toString());
		push(`${window.location.pathname}?${params.toString()}`);
	      };
    
	useEffect(() => {
		getSearchMulti({page, search}).then((response) => 
		setItems(response));			
	}, [page, search]);

	useEffect(() => {
		getSearchMulti({page, search}).then((response) => 
		setLastPage(response.total_pages)); 		
	}, [page, search]);

	return { page, search, items, setItems, setSearchParams, setPageParams, getSearchMulti, lastPage};
}

export { useItems };
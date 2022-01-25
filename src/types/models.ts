export type User = {
	id: string,
	email: string,
	password: string,
	name: string,
	lastName: string,
	birthdate: string,
	sessionToken?: string,
	role?: string,
};
      
export type AddUserType = Omit<User, "id">;

export type Item = {
	poster_path?: string;
	adult?: boolean;
	overview?: string;
	release_date?: string;
	genre_ids?: number[];
	id: number;
	idDB?: string;
	original_title?: string;
	original_language?: string;
	title: string;
	backdrop_path?: string | null;
	popularity?: number;
	vote_count?: number;
	video?: boolean;
	vote_average?: number;
};

export type ApiResponse = {
	page: number, 
	results: Item[], 
	total_pages: number,
	total_results: number,
};

export type Filter = {
	page: number,
	search: string | undefined
}

export type ItemFB = {
	title: string;
	poster_path?: string;
	popularity?: number;
	id: number;
	overview?: string;
	original_language?: string;
	release_date?: string;
}
      

      

export type User = {
	id: string;
	email: string;
	password: string;
	name: string;
	lastName: string;
	birthdate: string;
};
      
export type AddUserType = Omit<User, "id">;
      

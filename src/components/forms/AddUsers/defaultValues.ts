import { date } from "yup/lib/locale";

export const defaultValues = {
	name: "",
	lastName: "",
	email: "",
	password: "",
	birthdate: date,	
};
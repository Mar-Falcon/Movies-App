export const convertDateFormat = (date: any) => {
	return new Intl.DateTimeFormat('es-AR').format(new Date(date));  
}  
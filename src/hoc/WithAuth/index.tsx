import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";
import { useAuth } from "../../hooks";


const publicRoutes = ["/login", "/signup"]; 

const AdminRoutes = ["/admin", "/users"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {

	const Authenticated: FC = (): JSX.Element | null => {

		const { push, location } = useHistory();		
		
		const { hasUserLoggedIn, currentUser } = useAuth();    
    		
    		if (hasUserLoggedIn === undefined) return <Loading />;	
		    
		if (currentUser?.role !== "admin" && AdminRoutes.includes(location.pathname))push("/");    

    		if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push("/");				

   		if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))push("/login");		

    		return <Component />;
    	};	

	return Authenticated;

};

export { WithAuth }
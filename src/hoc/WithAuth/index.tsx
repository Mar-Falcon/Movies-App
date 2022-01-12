import { FC } from "react";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components";
import { useAuth } from "../../hooks";


const publicRoutes = ["/login", "/signup"]; 

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {

	const Authenticated: FC = (): JSX.Element | null => {

		const { push, location } = useHistory();
		
		const { hasUserLoggedIn } = useAuth();    
    		
    		if (hasUserLoggedIn === undefined) return <Loading />;

    		if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push("/");

   		if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))push("/login");

    		return <Component />;
    	};	

	return Authenticated;

};

export { WithAuth }
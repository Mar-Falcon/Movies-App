
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { User } from "../../types";
import { api } from "../../utils";
import { usersApi } from "../../api";

const useAuth = ()  => {	
	
	const login = async (email: string, password: string) => {		

		try {
		    const { getUsers } = usersApi;		   
		
		    // Backend 
		    const users: User[] = await getUsers();
		
		    const user = users.find(
			(user) => user.email === email && user.password === password
		    ); 		   
		
		    if (user) {
			// Token
			const token = await createUserToken(user);
		
			if (token) {
			setTokenStorage(token)
			setCurrentUser(user);
			}
		    } else {
			throw new Error("El usuario no existe");
		    }

		    const admin = users.find((user) => user.role === "admin");
		    		
		    if (admin) {			
			setCurrentUser(admin);
		    } else {
			setCurrentUser(user);
		    }
		    
		    // /Backend 
		}catch (e) {
		    console.log(e);
		}
	};
	
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [ tokenStorage, setTokenStorage] = useState <string | undefined>(
	    localStorage.getItem('user-token') || undefined)
    
	const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();	

	const { push }= useHistory();
    
	useEffect ( () => {
	    loginWithToken()
	},[]);
    
	const createUserToken = async (user: User): Promise<string | null> => {
		try {
		const newToken = Math.random().toString(36).substr(2);
		await api.patch(`/users/${user.id}.json`, { sessionToken: newToken });		
		return newToken;
		}catch (err) {
		return null;
		}
	};
    
	useEffect ( () => {
		if(tokenStorage) localStorage.setItem('user-token', tokenStorage)
	},[tokenStorage])    
	    
	const loginWithToken = async () => {
		let user;
		try {
		    const { getUsers } = usersApi;		    
		
		    // Backend 
		    const users: User[] = await getUsers();
		
		    if (tokenStorage) {
			user = users.find((user) => user.sessionToken === tokenStorage);
		    }
		
		    if (user) {
			setCurrentUser(user);
			setHasUserLoggedIn(true);
		    } else {
			setHasUserLoggedIn(false);
		    }		    
		    
		} catch (e) {
		   console.log(e);
		}
	};	
    
	const logout = () => {
		localStorage.removeItem('user-token')
		push('/login')
		setCurrentUser(undefined)
	};

	const UpdateUserData = () => {
		loginWithToken()
	}
   
	return { login, loginWithToken, logout, hasUserLoggedIn, currentUser, UpdateUserData}
}    
    
export { useAuth }
    
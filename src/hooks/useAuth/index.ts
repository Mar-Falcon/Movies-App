
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = ()  => {
	
	const login = async (email: string, password: string) => {
		try {
		    const response = await api.get("/users.json");
		
		    // Backend 
		    const users: User[] = mapToArray(response.data);
		
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
		    // /Backend 
		}catch (e) {
		    console.log(e);
		}
	};
	
	const { setCurrentUser } = useContext(AuthContext);
	const [ tokenStorage, setTokenStorage] = useState <string | undefined>(
	    localStorage.getItem('user-token') || undefined)
    
	const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();
	const { push }= useHistory();
    
	useEffect ( () => {
	    loginWithToken()
	},[])
    
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
		    const response = await api.get("/users.json");
		
		    // Backend 
		    const users: User[] = mapToArray(response.data);
		
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
    
	return { login, loginWithToken, logout, hasUserLoggedIn }
}    
    
export { useAuth }
    
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { defaultValues } from "../AddUsers/defaultValues";
import { validationSchema } from "../AddUsers/validationSchema";

const LoginUser: FC = () => {  
	
	const { login } = useAuth();
	const { push } = useHistory();
	
	const { handleSubmit, register, formState} = useForm<{ email: string; password: string }>({
	  defaultValues,
	  resolver: yupResolver(validationSchema),
	});	
      
	const onSubmit = async (data: { email: string; password: string }) => {
		
		  await login(data.email, data.password);
		  push("/");
		 
		
	      };
      
	return (
	  <form action="" onSubmit={handleSubmit(onSubmit)} className="container row g-3">	    
	    <div className="form-group">
	      <label htmlFor="" className="form-label">E-mail</label>
	      <input id="email" type="email" {...register("email")} className="form-control" />
	      <span className="text-white">{formState.errors.email?.message}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="" className="form-label">Password</label>
	      <input  id="pass" type="password" {...register("password")} className="form-control" />
	      <span className="text-white">
		{formState.errors.password?.message}
	      </span>
	    </div>    
	    <div className="d-flex justify-content-center">
	    	<button type="submit" className= "btn btn-primary m-auto">Login on</button>
	    </div>		
	    <div className="d-flex justify-content-center">
	    	<Link to="/signup" className="">I don´t have an account
		</Link>
	    </div>
	  </form>
	);
};
      
export { LoginUser };
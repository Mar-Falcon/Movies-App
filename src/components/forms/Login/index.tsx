import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUsers } from "../../../hooks";
import { User } from "../../../types";
import { defaultValues } from "../AddUsers/defaultValues";
import { validationSchema } from "../AddUsers/validationSchema";

const LoginUser: FC = () => {  
	
	const { users } = useUsers();
	const { handleSubmit, register, formState } = useForm({
	  defaultValues,
	  resolver: yupResolver(validationSchema),
	});
      
	const onSubmit = (data: User) => {
	  console.log(users);
	};
      
	return (
	  <form action="" onSubmit={handleSubmit(onSubmit)} className="container row g-3">	    
	    <div className="form-group">
	      <label htmlFor="" className="form-label">E-mail</label>
	      <input type="email" {...register("email")} className="form-control" />
	      <span className="text-white">{formState.errors.email?.message}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="" className="form-label">Password</label>
	      <input type="password" {...register("password")} className="form-control" />
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
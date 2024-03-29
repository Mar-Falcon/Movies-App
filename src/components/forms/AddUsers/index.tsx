import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { AddUserType } from "../../../types";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { useUsers } from "../../../hooks";
import { Link, useHistory } from "react-router-dom";

const AddUsers: FC = () => {
	const { addUser } = useUsers();
	const { push } = useHistory();
      
	const { handleSubmit, register, formState} = useForm<AddUserType>({
	  defaultValues,
	  resolver: yupResolver(validationSchema),
	});
      
	const onSubmit = async (data: AddUserType) => {
		await addUser(data);	
		push("/login");		
	};
      
	return (
	  <form action="" onSubmit={handleSubmit(onSubmit)} className="container row g-3 mt-5">
		<div className="col-md-3">
			<label htmlFor="" className="form-label text-white">Name</label>
			<input type="text" {...register("name")} className="form-control"/>
			<span className="text-danger">{formState.errors.name?.message}</span>
		</div>
		<div className="col-md-3">
			<label htmlFor=""className="form-label text-white">Lastname</label>
			<input type="text" {...register("lastName")} className="form-control" />
			<span className="text-danger">{formState.errors.name?.message}</span>
		</div>
		<div className="col-md-6">
			<label htmlFor="" className="form-label text-white">Birthdate</label>
			<input type="Date" {...register("birthdate")} className="form-control"/>
			<span className="text-danger">{formState.errors.birthdate}</span>
		</div>      
		<div className="form-group">
			<label htmlFor="" className="form-label text-white">E-mail</label>
			<input type="email" {...register("email")} className="form-control" />
			<span className="text-danger">{formState.errors.email?.message}</span>
		</div>      
		<div className="form-group">
			<label htmlFor="" className="form-label text-white">Password</label>
			<input type="password" {...register("password")} className="form-control" />
			<span className="text-danger">
				{formState.errors.password?.message}
			</span>
		</div> 
		<div className="form-group">
			<label htmlFor="" hidden>Role</label>
			<input type="text" {...register("role")} hidden/>
		</div> 
		<div className="form-group">
          		<label htmlFor="" hidden>Viewed</label>
          		<input type="text" {...register("viewed")} hidden />
        	</div>  
		<div className="d-flex justify-content-center">
			<button type="submit" className= "btn btn-primary m-auto">Create Account</button>
		</div>		
		<div className="d-flex justify-content-center">
			<Link to="/login" className="">I have an account
			</Link>
		</div>
	  </form>
	);
};
      
export { AddUsers };
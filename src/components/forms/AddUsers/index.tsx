import { FC } from "react";
import { useForm } from "react-hook-form";
import { AddUserType } from "../../../types";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUsers } from "../../../hooks";

const AddUsers: FC = () => {
	const { addUser } = useUsers();
      
	const { handleSubmit, register, formState } = useForm({
	  defaultValues,
	  resolver: yupResolver(validationSchema),
	});
      
	const onSubmit = async (data: AddUserType) => {
	  await addUser(data);
	};
      
	return (
	  <form action="" onSubmit={handleSubmit(onSubmit)} className="container row g-3">
	    <div className="col-md-3">
	      <label htmlFor="" className="form-label">Name</label>
	      <input type="text" {...register("name")} className="form-control"/>
	      <span className="text-danger">{formState.errors.name?.message}</span>
	    </div>
	    <div className="col-md-3">
	      <label htmlFor=""className="form-label">Lastname</label>
	      <input type="text" {...register("lastName")} className="form-control" />
	      <span className="text-danger">{formState.errors.name?.message}</span>
	    </div>
	    <div className="col-md-6">
	      <label htmlFor="" className="form-label">Birthdate</label>
	      <input type="Date" {...register("birthdate")} className="form-control"/>
	      <span className="text-danger">{formState.errors.birthdate}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="" className="form-label">E-mail</label>
	      <input type="email" {...register("email")} className="form-control" />
	      <span className="text-danger">{formState.errors.email?.message}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="" className="form-label">Password</label>
	      <input type="password" {...register("password")} className="form-control" />
	      <span className="text-danger">
		{formState.errors.password?.message}
	      </span>
	    </div>    
	    <div className="col-12">
	    <button type="submit" className= "btn btn-primary">Enviar</button>
	    </div>
	  </form>
	);
};
      
export { AddUsers };
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../../../hooks/useUsers";
import { AddUserType } from "../../../types";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

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
	  <form action="" onSubmit={handleSubmit(onSubmit)}>
	    <div className="form-group">
	      <label htmlFor="">name</label>
	      <input type="text" {...register("name")} />
	      <span className="text-danger">{formState.errors.name?.message}</span>
	    </div>
	    <div className="form-group">
	      <label htmlFor="">lastname</label>
	      <input type="text" {...register("name")} />
	      <span className="text-danger">{formState.errors.name?.message}</span>
	    </div>
	    <div className="form-group">
	      <label htmlFor="">birthdate</label>
	      <input type="Date" {...register("birthdate")} />
	      <span className="text-danger">{formState.errors.birthdate}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="">email</label>
	      <input type="email" {...register("email")} />
	      <span className="text-danger">{formState.errors.email?.message}</span>
	    </div>      
	    <div className="form-group">
	      <label htmlFor="">password</label>
	      <input type="password" {...register("password")} />
	      <span className="text-danger">
		{formState.errors.password?.message}
	      </span>
	    </div>    
	    
	    <button type="submit">Enviar</button>
	  </form>
	);
      };
      
      export { AddUsers };
import { FC } from "react";
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../../hooks";

const Nav: FC = () => {

	const { logout } = useAuth();

	return (		
	    <nav className="navbar navbar-expand-lg navbar-light p-3">
		<div className="container-fluid">
			<div className="navbar-brand text-white">
				<h1>Cinem<em>ADA</em></h1>
			</div>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
		    	</button>
		    	<div className="navbar-collapse collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link to="/" className="nav-link active"> Home </Link>			
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link active"> SignUp </Link>			
					</li>
					<li className="nav-item">
						<Link to="/movies" className="nav-link active"> Movies </Link>  			
					</li>
					<li className="nav-item">
						<Link to="/series" className="nav-link active"> Series </Link>  			
					</li>	
					<li className="nav-item">
						<Link to="/users" className="nav-link active"> Users </Link>  			
					</li>
					<li className="nav-item">
						<Link to="/admin" className="nav-link active"> Admin </Link>  			
					</li>	
					<li className="nav-item">
						<Link to="/login" className="nav-link active"> Login </Link>  			
					</li>		        
				</ul>
				<button className= "btn" onClick={logout}> SignOff </button>
			</div>
		</div>
	    </nav>
	    
	)
}
	
export { Nav }
import { FC } from "react";
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Nav: FC = () => {

	return (		
	    <nav className="navbar navbar-expand-lg navbar-light">
		<div className="container-fluid">
			<h1>Cinem<em>ADA</em></h1>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
		    	</button>
		    	<div className="navbar-collapse collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link to="/" className="nav-link active"> Home </Link>			
					</li>
					<li className="nav-item">
						<Link to="/signUp" className="nav-link active"> SignUp </Link>			
					</li>
					<li className="nav-item">
						<Link to="/items" className="nav-link active"> Items </Link>  			
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
			</div>
		</div>
	    </nav>
	    
	)
}
	
export { Nav }
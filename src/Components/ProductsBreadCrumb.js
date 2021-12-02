import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ProductBreadCrumb(props){
    return(
        <div className="products-breadcrumb">
		<Container>
			<ul>
				<li><FontAwesomeIcon icon={faHome} aria-hidden="true"/><Link to="/">Home</Link><span>|</span></li>
				<li>{props.text.toUpperCase()}</li>
			</ul>
		</Container>
	</div>
    )
}

export default ProductBreadCrumb;
import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";
import { Navbar, Container, Dropdown } from 'react-bootstrap'
import starwarslogo from '../../img/starwarslogo2.png'
import { FaTrash } from "react-icons/fa";

export const NavbarSW = () => {
	const {store, actions} = useContext(Context);
	return (
		<Navbar>
    	<Container>
			<Link to={"/"}>
      	<Navbar.Brand href="#home">
        <img
          alt=""
          src={starwarslogo}
          width="90"
          height="80"
          className="d-inline-block align-top"
        />
      	</Navbar.Brand>
			</Link>
		<Dropdown>
  		<Dropdown.Toggle variant="primary" id="dropdown-basic">
   		 Favorites {'  '}<span className='span-favorites'>{store.favorites.length}</span>
  		</Dropdown.Toggle>

 		 <Dropdown.Menu>{store.favorites.map((favorite, idx) => {
			  return (
				  <Dropdown.Item key={idx}>
					  {favorite} <FaTrash onClick={(idx) => {actions.removeFavorite(favorite)}}/>
				  </Dropdown.Item>
			  )
		  })}
  		 </Dropdown.Menu>
		</Dropdown>
		</Container>
  		</Navbar>
	);
};

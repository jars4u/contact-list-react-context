import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1><center>Add a new Contact</center></h1>
			<ul>
				<li>Full Name</li>
				<li><input type="text" placeholder="Full Name"></input></li>
				<li>Email</li>
				<li><input type="text" placeholder="Email"></input></li>
				<li>Phone Number</li>
				<li><input type="text" placeholder="Phone Number"></input></li>
				<li>Address</li>
				<li><input type="text" placeholder="Address"></input></li>
			<br />
			<Link to="/">
				<div class="d-grid gap-2">
					<button class="btn btn-primary" type="button">Save</button>
				</div>
				<a href="#" class="link-primary">or get back to Contacts</a>
			</Link>
			</ul>
		</div>
	);
};

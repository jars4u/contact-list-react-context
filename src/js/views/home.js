import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";
import { CardContact } from "../component/CardContact";


export const Home = () => {

  const { actions, store } = useContext(Context)
  const { allContacts } = store

  return (
    <>
      <div className="container">

        <li className="d-flex justify-content-end">
          <Link to="/demo">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        </li>

        {/* Contact card content (Boostrap)*/}
        <CardContact />

      </div>
    </>
  );
};

export default Home;

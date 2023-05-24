import React from "react";
import "../../styles/home.css";

export const Home = () => {

  return (
    <div className="container">

      <ul class="list-group border rounded-1">
        <li className="d-flex justify-content-end"><button className="btn btn-success">Add new contact</button></li>

        {/* Contact card content (Boostrap)*/}
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <img src="https://avatars.githubusercontent.com/u/127767142?v=4"
            class="rounded-circle"
            alt="Perfil de Juan Ramos" />
          <div class="ms-2 me-auto">
            <ul>
              <li><div class="fw-bold text-uppercase fs-5">Juan A. Ramos S.</div></li>
              <li><i class="fa-solid fa-location-dot"></i>Maracaibo, Venezuela</li>
              <li><i class="fa-solid fa-phone"></i>(+58)414-9630979</li>
              <li><i class="fa-solid fa-envelope"></i>jars4u2@gmail.com</li>
            </ul>
          </div>
          <span><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash-can"></i></span>
        </li>
      </ul>

    </div>
  );
};

export default Home;

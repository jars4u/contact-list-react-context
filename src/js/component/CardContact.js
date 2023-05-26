import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CardContact = ({ key, contact }) => {

    return (
        <ul class="list-group border rounded-1">
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
    )
}
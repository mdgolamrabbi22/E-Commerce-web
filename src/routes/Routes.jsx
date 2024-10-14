import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Blog from "../components/Blog"
import MainLayout from "../layout/MainLayout"
import React from 'react'
import Redmi from "../components/Redmi";
import Realme from "../components/Realme";
import Apple from "../components/Apple";
import Oneplus from "../components/Oneplus";
import Samsung from "../components/Samsung";
import Tecno from "../components/Tecno";
import Signup from "../components/Signup"
import Login from "../components/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/redmi",
                element:<Redmi></Redmi>
            },
            {
                path:"/realme",
                element:<Realme></Realme>
            },
            {
                path:"/apple",
                element:<Apple></Apple>
            },
            {
                path:"/oneplus",
                element:<Oneplus></Oneplus>
            },
            {
                path:"/samsung",
                element:<Samsung></Samsung>
            },
            {
                path:"/tecno",
                element:<Tecno></Tecno>
            },
            

        ]
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
   
 ]);

  export default routes
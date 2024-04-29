import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Blog, AllProjects, Contact } from "./exports";



const PageRoutes = () => {
    
    return (
        <Routes>
            
        <Route path="/" exact      element={<Home />} />
        <Route path="/allProjects" element={<AllProjects />} />
        <Route path="/blog"        element={<Blog />} />
        <Route path="/contact"     element={<Contact />} />
        
        </Routes>

    );
    
};

export default PageRoutes;



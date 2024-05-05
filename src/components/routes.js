import React, { useEffect } from "react";
import { Route, Routes, useLocation  } from "react-router-dom";
import { Home, Blog, AllProjects, AllContacts } from "./exports";

export const ScrollToTop = () => {
    
    const allProjects  = useLocation();

    useEffect(() => {
       window.scrollTo(0, 0);
    }, [allProjects]);
   
    return null;
};

const PageRoutes = () => {
    
    return (
     
        <Routes>      
        <Route path="/" exact      element={<Home />} />
        <Route path="/allProjects" element={<AllProjects />} />
        <Route path="/blog"        element={<Blog />} />
        <Route path="/contact"     element={<AllContacts />} />  
        </Routes>
      
    );
    
};

export default PageRoutes;



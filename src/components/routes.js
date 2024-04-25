import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./projects/allProjects/AllProjects";

const PageRoutes = () => {
    
    return (
        <Routes>
        <Route path="/projects/allProjects/AllProjects" element={<AllProjects />} />
        </Routes>

    );
    
};

export default PageRoutes;



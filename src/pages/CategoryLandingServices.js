import React, {useEffect} from "react";
import "../App.css";
import LandingServices from "../components/LandingServices/LandingServices.js";

 function CategoryServices(){
    useEffect(()=>{
        document.title = "Category Services"
    },[]);
    return (
        <div className="App">
            <LandingServices/>

            sdsfd hello SAMPLE
        </div>
    );
};

export default CategoryServices;

import React, { useState } from "react";
import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
const ClickMap = () => {
    let navigate=useNavigate();
    const [location,setLocation]=useState(null);

    const map =useMapEvents({click(e){

        setLocation(e.latlng);
        map.flyTo(e.latlng);
        localStorage.setItem("lat",location.lat);
        localStorage.setItem("lang",location.lng);
        navigate("/add_contact");
    }})

}
export default ClickMap;
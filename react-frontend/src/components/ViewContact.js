import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
    let [info, setInfo] = useState([]);
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (var pair of queryString.entries()) {
        var contact_id = pair[1]
    }
    const fetchInfo = async () => {

        try {
            const res = await fetch("http://localhost:8080/api/v1/contact/get_contact?id=" + contact_id);
            const data = await res.json();
            console.log(data);
            setInfo(data);
            return data;
        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        const getInfo = async () => {
            const serverInfo = await fetchInfo();
            setInfo(serverInfo);
            console.log(serverInfo);
        };
        getInfo();

    }, []);

        return (
            <>
                <div className="view_contact">
                    {/* <img src='../assets/'+{info.image}+'' > */}
                    <h3>{info.first_name}</h3>
                    <h3>{info.last_name}</h3>
                    <h3>{info.phonenumber}</h3>
                    <h3>{info.email}</h3>
                    <h3>{info.relationship_status}</h3>
                    <h3>{info.latitude}</h3>
                    <h3>{info.longitude}</h3>

                    </div>
                    <Link to={"/get_contacts"}className="link">Back</Link>
                </>
                );
}

export default ViewContact;
import React from "react";
import { useState, useEffect } from "react";

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
            const res = await fetch("http://localhost:8080/api/contact/get_contact?id=" + contact_id);
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
                
                    <div>{info.first_name}</div>
                    <div>{info.last_name}</div>
                    <div>{info.phonenumber}</div>
                    <div>{info.email}</div>
                    <div>{info.relationship_status}</div>
                    <div>{info.latitude}</div>
                    <div>{info.longitude}</div>
                </>
                );
}

export default ViewContact;
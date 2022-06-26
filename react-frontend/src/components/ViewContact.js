import React from "react";

const ViewContact = () => {
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (var pair of queryString.entries()) {
        var contact_id=pair[1]
    }

  return (
   <></>
  );
};

export default ViewContact;
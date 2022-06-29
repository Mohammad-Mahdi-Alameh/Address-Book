import { useNavigate } from "react-router-dom";
const Contact = ({ contact}) => {
  let navigate = useNavigate();
  return (
    <div
    className={"contact"}
    onClick={() => {
      navigate("/get_info?contact_id="+contact._id);


    }}
    >
      <h2>
        {contact.first_name}{" "} {contact.last_name}<br></br>
        
      </h2>
      <h4>{contact.phonenumber}</h4>
    </div>
  );
};

export default Contact;
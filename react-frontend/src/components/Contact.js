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
      <h3>
        {contact.first_name}{" "} {contact.last_name}
        
      </h3>
    </div>
  );
};

export default Contact;
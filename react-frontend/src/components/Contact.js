import { useNavigate } from "react-router-dom";
const Contact = ({ contact}) => {
  let navigate = useNavigate();
  return (
    <div
    className={"contact"}
    onClick={() => {
      navigate("/get_info?contact_id="+contact.id);


    }}
    >
      <h3>
        {Contact.first_name}{" "} {Contact.last_name}
        
      </h3>
    </div>
  );
};

export default Contact;
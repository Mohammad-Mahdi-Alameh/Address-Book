import React from "react";
const Input = ({ type,placeholder,value,label,name}) => {
   
      return (<div className={type}>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        
        // onChange={(e) => {
          //     setName(e.target.value);
          // }}
          />
        </div>
      );
      
    };
export default Input;
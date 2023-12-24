import React from 'react'

const FormInput = ({ label, name, type, defaultValue }) => {
   
  return (
   
 <label className="form-control">
  <label className="label">
    <span className="label-text capitalize">{label}</span>
    
  </label>
  <input type={type} 
  defaultValue={defaultValue}
  name={name}
  
  className="input input-bordered " />
  
 
</label>
   
   
  )
}

export default FormInput
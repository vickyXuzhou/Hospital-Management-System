import React from 'react'

const Input = ({type,value,placeholder,name,inputDisabled}) => {
  return (
  <div>
        <input type={type}
    value={value}
    placeholder={placeholder}
    name={name}
    required
    disabled={inputDisabled}
    // onChange={handleOnChange}
    />
  </div>
  )
}

export default Input

import React from 'react';
import "./InputSignIn_Sign_Out.scss"

interface InputProps {
    value: string;
    placeholder: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const Input: React.FC<InputProps>  = ({value, placeholder, onChange, type}) => {


    
return (
<>
<input required className="input" type={type} value={value} placeholder={placeholder} onChange={onChange}/>
</>
)
}
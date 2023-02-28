
import React from 'react';
import "./InputSignIn_Sign_Out.scss"

interface InputProps {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const Input: React.FC<InputProps>  = ({value, placeholder, onChange}) => {


    
return (
<>
<input className="input" type="text" value={value} placeholder={placeholder} onChange={onChange}/>
</>
)
}
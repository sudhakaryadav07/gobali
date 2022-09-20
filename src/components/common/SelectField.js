import React from 'react';
import { Input } from 'reactstrap';

export const SelectField = ({ placeholder, className, error, size, required, disabled, value, options, onChange }) => {
   try {
      return (
         <Input
            type='select'
            className={className}
            custom
            as='select'
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            size={size}
            onChange={(evt) => onChange(evt.target.value)}
            onKeyDown={(evt) => onChange(evt.target.value)}
            isInvalid={error}
         >
            {
               options.map((val, idx) => (
                  <option value={val.value} key={`${val.name}:${idx}`}>
                     {val.name}
                  </option>
               ))
            }
         </Input >
      );
   } catch (e) {
      console.log(">>>", e)
   }

};

SelectField.defaultProps = {
   size: 'sm',
   type: 'text',
   options: [],
   value: '',
};

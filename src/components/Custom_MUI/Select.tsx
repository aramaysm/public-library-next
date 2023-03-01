import {Select,MenuItem,InputLabel} from '@mui/material';
import React from 'react';
import {FormControl_Customized} from "./FormControl_Styled";

interface SelectProps {
    label: string;
    options: Array<any>;
    onSelectChangeProp: (value:any) => void;

}


export const Select_Customized = ({label, options, onSelectChangeProp}:SelectProps) => {
  
  
    const [itemSelected, setItemSelected] = React.useState<any>({});

    const onChangeSelect = (event:any) => {
        setItemSelected(event.target.value);
        onSelectChangeProp(event.target.value);
    }
    return (
    <FormControl_Customized fullWidth>
      <InputLabel >{label}</InputLabel>
      <Select       
        value={itemSelected}
        label={label}
        onChange={onChangeSelect}
      >
        {
            options.map((option) => {
                return <MenuItem value={option.value}>{option.label}</MenuItem>
            })
        }
      
      </Select>
    </FormControl_Customized>
  )
};

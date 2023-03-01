import { Search } from "@mui/icons-material";
import {  IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { FormControl_Customized } from "./FormControl_Styled";


interface SearchProps {
    label: string;
    onChangeProp: (value:any) => void;
    
}

export const Search_TextField = ({label, onChangeProp}:SearchProps) => {
  
    const [value, setValue] = useState<string>("");
  
    return (
    <FormControl_Customized  variant="outlined">
    <InputLabel >{label}</InputLabel>
    <OutlinedInput onChange={(e) => setValue(e.target.value)}
      type={'text' }
      endAdornment={
        <InputAdornment position="end">
          <IconButton               
            onClick={()=> onChangeProp(value)}
            edge="end"
          >
           <Search color="primary" fontSize="large" />
          </IconButton>
        </InputAdornment>
      }
      label={label}
      value = {value}
    />
  </FormControl_Customized>
   )

}
import { styled } from "@mui/material/styles";
import {Button} from "@mui/material"


export const ButtonPrimaryStyled = styled(Button)({
    borderRadius:"20px",
    boxShadow: "0 0.1rem 1rem #b8e7fd",    
});

export const ButtonWarningStyled = styled(Button)({
    borderRadius:"20px",
    boxShadow: "0 0.1rem 1rem #f1fa78",    
});

export const ButtonErrorStyled = styled(Button)({
    borderRadius:"20px",
    boxShadow: "0 0.1rem 1rem #fcafaf",    
});
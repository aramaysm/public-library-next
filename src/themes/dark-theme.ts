import { createTheme } from "@mui/material";


export const darkTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary:{
                main: '#2ecc71',
                contrastText:"white",
                
            },
        }
    }
);
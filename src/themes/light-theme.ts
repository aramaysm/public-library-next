import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


export const lightTheme = createTheme(
    {
        palette: {
            mode: 'light',
            background:{
                default: grey [200]
            },
            primary:{
                main: '#03b4cf',
                contrastText:"white"
            },
            secondary:{
                main: '#19857b'
            }
        },
        
    }
);
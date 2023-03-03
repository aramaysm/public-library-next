import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


export const lightTheme = createTheme(
    {
        palette: {
            mode: 'light',
            background:{
                default: "white"
            },
            primary:{
                main: '#2ecc71',
                contrastText:"white",
                
            },
            secondary:{
                main: '#19857b'
            }
        },
        components: {
            MuiLink: {
              defaultProps: {
                underline: 'none',
              },
            },
            MuiAppBar: {
              defaultProps: {
               position: 'fixed',
              },
              styleOverrides: {
                root: {
                  backgroundColor: 'white',
                  height: 60
                },
              }
            }
        }
        
    }
);
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextField_Customized = styled(TextField)({
    "& label.Mui-focused": {
      color: "#2ecc71",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2ecc71",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#2ecc71",
      },
      "&:hover fieldset": {
        borderColor: "#2ecc71",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2ecc71",
      },
    },
  });
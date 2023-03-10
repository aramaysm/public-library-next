import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormControl_Customized = styled(FormControl)({
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
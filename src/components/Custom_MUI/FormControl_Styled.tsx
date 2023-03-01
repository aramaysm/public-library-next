import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormControl_Customized = styled(FormControl)({
    "& label.Mui-focused": {
      color: "#03b4cf",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#03b4cf",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#03b4cf",
      },
      "&:hover fieldset": {
        borderColor: "#03b4cf",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#03b4cf",
      },
    },
  });
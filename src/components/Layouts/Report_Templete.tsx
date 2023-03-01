import { Search } from "@mui/icons-material";
import { Box, Typography, Card, CardContent, CardActions, Button, CardHeader } from "@mui/material";
import {
  FormControl_Customized,
  Search_TextField,
  Select_Customized,
  Table_Customized,ButtonPrimaryStyled
} from "../Custom_MUI";

interface TempleteProps {
  columns: Array<any>;
  data: Array<any>;
  title: string;
  optionsToFilter: Array<any>;
}

export const Report_Templete = ({
  columns,
  data,
  title,
  optionsToFilter,
}: TempleteProps) => {
  const onSelectChange = (value: any) => {
    console.log("Change selection", value);
  };

  return (
    <div className="col-l-8 col-sm-10 col-md-10">
      <Card>
        <Box sx={{padding:"10px"}}>
        <div className="j-c-b row m-t-5 ">
          <div className="col-l-8 col-m-6 col-s-3">
            <Typography variant="h5">{title}</Typography>
          </div>
          <div className="col-l-1 col-m-2 col-s-3">
            <Select_Customized
              label="Filtrar"
              options={optionsToFilter}
              onSelectChangeProp={onSelectChange}
            />
          </div>
          <div className="col-l-1 col-m-2 col-s-3">
            <Search_TextField
              label="Buscar"
              onChangeProp={(value: any) => console.log("Esta buscando", value)}
            />
          </div>
        </div>
        </Box>
        <CardContent>
          <Table_Customized
            columns={columns}
            data={data}
            onElementSelected={function (element: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </CardContent>
        <CardActions className="j-c-c">
          <ButtonPrimaryStyled variant="contained" color="primary">Insertar</ButtonPrimaryStyled>
        </CardActions>
      </Card>
      
    </div>
  );
};

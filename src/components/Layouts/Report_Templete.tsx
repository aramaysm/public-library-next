import { Add, Search } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";
import {
  FormControl_Customized,
  Search_TextField,
  Select_Customized,
  Table_Customized
} from "../Custom_MUI";

interface TempleteProps {
  columns: Array<any>;
  data: Array<any>;
  title: string;
  optionsToFilter: Array<any>;
  onInsertClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onElementSelected: (data:any) => void;
}

export const Report_Templete = ({
  columns,
  data,
  title,
  optionsToFilter,
  onInsertClick,
  onEditClick,
  onDeleteClick,onElementSelected
}: TempleteProps) => {
  const onSelectChange = (value: any) => {
    console.log("Change selection", value);
  };

  return (
    <div className="col-10 col-s-10 col-l-9 m-t-5 ">
      <div className="card shadow m-t-5">
        <div className="card-header row bg-transparent">        
            <div className="col-10 col-s-10 col-l-6 m-t-4 ">
              <Typography variant="h5">
                {title}
              </Typography>
              
            </div>
            <div className="col-5 col-s-5 col-l-2 m-t-4">
              <Select_Customized
                label="Filtrar"
                options={optionsToFilter}
                onSelectChangeProp={onSelectChange}
              />
            </div>
            <div className="col-5 col-s-5 col-l-2 m-t-4">
              <Search_TextField
                label="Buscar"
                onChangeProp={(value: any) =>
                  console.log("Esta buscando", value)
                }
              />
            </div>
          
        </div>
        <div className="card-body m-t-4">
          <Table_Customized onEditClick={onEditClick}
           onDeleteClick={onDeleteClick}
            columns={columns}
            data={data}
            onElementSelected={(data)=>onElementSelected(data)}
          />
        </div>
        <div className="card-footer m-b-3 bg-transparent j-c-c">
          <Button variant="contained" color="primary" 
          onClick={()=>onInsertClick()}
           startIcon={<Add />}>
            Insertar
          </Button>
        </div>
      </div>
    </div>
  );
};

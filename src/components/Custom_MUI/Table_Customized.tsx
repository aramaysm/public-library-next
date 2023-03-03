import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
 } from "@mui/material";
import {Check,Close, AccountBox } from "@mui/icons-material/";

import { Chip_Success, Chip_Error } from "./Chip_Styled";
import { Delete, Edit } from "@mui/icons-material";


interface TableProps {
  columns: Array<any>;
  data: Array<any>;
  onElementSelected: (element: any) => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export const Table_Customized = ({
  columns,
  data,
  onElementSelected,
  onEditClick,
  onDeleteClick,
}: TableProps) => {
  const [selectedRow, setSelectedRow] = useState<any>({});

  const handleClickRow = (event: any, selectedData: any) => {
    setSelectedRow(selectedData);
    if (onElementSelected !== null) {
      onElementSelected(selectedData);
      console.log("Handle click row", selectedData);
    }
  };

  return (
    <Paper sx={{ width: "100%", padding: "0", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table  aria-label="sticky table">
          <TableHead className="color-m-gray bg-transparent">
            <TableRow className="color-m-gray">
              {columns.map((column) => (
                <TableCell
                  className="color-m-gray"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label.toUpperCase()}
                </TableCell>
              ))}
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {

              const imageAlt = "https://i.postimg.cc/wMCS8Sj0/happy-smiling-young-man-3d-260nw-2128644164.png";

              return (
                <TableRow
                  hover
                  aria-checked={selectedRow === row}
                  selected={selectedRow === row}
                  onClick={(event) => handleClickRow(event, row)}
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                >
                  {columns.map((column) => {
                    let value = "";
                    let colorBooleans = "";

                    return column.id === "status" ? 
                      <TableCell key={row[column.id]} align={column.align}>
                        {row[column.id] === "Available" ? (
                          <Chip_Success
                          icon={<Check />}
                            color="success"
                            label="Disponible"
                          />
                        ) : (
                          <Chip_Error
                          icon={<Close />}
                            color="error"
                            label="No disponible"
                          />
                        )}
                      </TableCell>
                     :
                    column.id === "photo" 
                    ?
                    <TableCell key={row[column.id]} align={column.align}>
                     
                      <img className="rd-10 shadow"
                       src={row[column.id] !== "" ? row[column.id] : imageAlt
                       } height={80} width={75} />                    
                      
                    </TableCell>
                    :

                    
                      <TableCell key={row[column.id]} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    
                  })}

                  <TableCell align="center">
                    <Button color="primary" variant="outlined"
                     startIcon={<Edit />} onClick={()=>onEditClick()} > Editar</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button color="error" variant="outlined"
                     startIcon={<Delete />} onClick={()=>onDeleteClick()}> Eliminar</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

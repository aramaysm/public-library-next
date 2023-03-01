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
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Chip_Success, Chip_Error } from "./Chip_Styled";
import {ButtonWarningStyled, ButtonErrorStyled} from "./Button_Styled"

interface TableProps {
  columns: Array<any>;
  data: Array<any>;
  onElementSelected: (element: any) => void;
}

export const Table_Customized = ({
  columns,
  data,
  onElementSelected,
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

                    return column.id === "status" ? (
                      <TableCell key={row[column.id]} align={column.align}>
                        {row[column.id] === "Available" ? (
                          <Chip_Success
                          icon={<CheckIcon />}
                            color="success"
                            label="Disponible"
                          />
                        ) : (
                          <Chip_Error
                          icon={<CloseIcon />}
                            color="error"
                            label="No disponible"
                          />
                        )}
                      </TableCell>
                    ) : (
                      <TableCell key={row[column.id]} align={column.align}>
                        {row[column.id]}
                      </TableCell>
                    );
                  })}

                  <TableCell align="center">
                    <ButtonWarningStyled color="warning" variant="contained"> Editar</ButtonWarningStyled>
                  </TableCell>
                  <TableCell align="center">
                    <ButtonErrorStyled color="error" variant="contained"> Eliminar</ButtonErrorStyled>
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

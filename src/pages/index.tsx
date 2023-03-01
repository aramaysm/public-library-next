import { Report_Templete } from "@/components/Layouts";
import { Typography, Button } from "@mui/material";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="row j-c-c align-content-center">
      <Report_Templete
        columns={columns}
        data={dataLoad}
        title={"Autores"}
        optionsToFilter={[
          { value: "1", label: "Nombre" },
          { value: "2", label: "Apellido" },
          { value: "3", label: "Edad" },
        ]}
      />
    </div>
  );
};

const columns = [
  {
    id: "id",
    label: "Id",
    minWidth: 50,
    align: "center",
  },
  {
    id: "name",
    label: "Nombre",
    minWidth: 150,
    align: "center",
  },
  {
    id: "lastName",
    label: "Apellido",
    minWidth: 150,
    align: "center",
  },
  {
    id: "age",
    label: "Edad",
    minWidth: 150,
    align: "center",
  },
  {
    id: "status",
    label: "Estado",
    minWidth: 150,
    align: "center",
  },
];
const dataLoad = [
  {
    id: 1,
    name: "Juan",
    lastName: "Perez",
    age: 20,
    status: "Available",
  },
  {
    id: 2,
    name: "Pedro",
    lastName: "Perez",
    age: 22,
    status: "Unavailable",
  },
];

export default HomePage;

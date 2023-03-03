import { Navbar } from "@/components/Custom_MUI/";
import { Report_Templete } from "@/components/Layouts";
import { Author_Modal } from "@/components/Modals/Author_Modal";
import React from "react";

const AuthorsPage = () => {


  const [openModal, setOpenModal] = React.useState(false);
const [dataSelected, setDataSelected] = React.useState<any>({});



  const onElementSelected = (data: any) => {
    setDataSelected(data);
  }

  return (
    <div className="row j-c-c ">
      <Navbar />
      <Report_Templete  onElementSelected={onElementSelected}
      onInsertClick={()=>setOpenModal(true)}
      onEditClick={()=>setOpenModal(true)}
      onDeleteClick={()=>console.log("Eliminar")}
        columns={columns}
        data={dataLoad}
        title={"Autores"}
        optionsToFilter={[
          { value: "1", label: "Nombre" },
          { value: "2", label: "Apellido" },
         
        ]}
      />
      <Author_Modal id={0} open={openModal} name_Prop={dataSelected.name}
       review_Prop={dataSelected.review} 
       birth_date_Prop={dataSelected.birth_date}
        photo_Prop={dataSelected.photo} status_Prop={dataSelected.status}
         onClose={()=>setOpenModal(false)} onCloseSaved={function (data: any): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default AuthorsPage;

const columns = [
  {
    id: "photo",
    label: "Foto",
    minWidth: 150,
    align: "center",
  },
  {
    id: "name",
    label: "Nombre completo",
    minWidth: 150,
    align: "center",
  },
  {
    id: "review",
    label: "Reseña",
    minWidth: 150,
    align: "center",
  },
  {
    id: "birth_date",
    label: "Fecha de nacimiento",
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
    photo:"https://i.postimg.cc/rp6TLLh6/4497.webp",
    name:"Dan Brown",
    review:"Is excelent writter",
    birth_date:"02-03-1958",
    status: "Available",
  },
  {
    photo:"https://i.postimg.cc/rp6TLLh6/4497.webp",
    name:"Dan Brown",
    review:"Is excelent writter",
    birth_date: "02-03-1958",
    status: "Unavailable",
  },
];

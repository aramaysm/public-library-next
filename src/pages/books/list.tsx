import { Navbar } from "@/components/Custom_MUI/";
import { Report_Templete } from "@/components/Layouts";

const BooksPage = () => {
  return (
    <div className="row j-c-c ">
      <Navbar />
      <Report_Templete
        columns={columns}
        data={dataLoad}
        title={"Libros"}
        optionsToFilter={[
          { value: "1", label: "Nombre" },
          { value: "2", label: "Apellido" },
          { value: "3", label: "Edad" },
        ]}
      />
    </div>
  );
};

export default BooksPage;

const columns = [
  
  {
    id: "photo",
    label: "Carátula",
    minWidth: 70,
    align: "center",
  },
  {
    id: "title",
    label: "Título",
    minWidth: 150,
    align: "center",
  },
  {
    id: "author",
    label: "Autor(es)",
    minWidth: 150,
    align: "center",
  },
  {
    id: "isbn",
    label: "ISBN",
    minWidth: 100,
    align: "center",
  },
  {
    id: "year",
    label: "Año de publicación",
    minWidth: 70,
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
    photo: "https://i.postimg.cc/DZchcpCD/51-Wm-NPpn5s-L.jpg",
    title: "El codigo de Da Vinci",
    author: "Dan Brown",
    isbn: "5487-BHVH-454",   
    year:2000,
    status: "Available",
  },
  {
    photo: "https://i.postimg.cc/DZchcpCD/51-Wm-NPpn5s-L.jpg",
    title: "Origen",
    author: "Dan Brown",
    isbn: "5487-BHVH-454",   
    year:2000,
    status: "Unavailable",
  },
];

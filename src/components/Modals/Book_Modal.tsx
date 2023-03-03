import { Check, Close } from "@mui/icons-material";
import {
  TextField,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material/";
import { useState, useEffect } from "react";
import { TextField_Customized } from ".././Custom_MUI/TextField_Styled";
import { Chip_Error, Chip_Success } from "../Custom_MUI";

interface Props {
  id: number;
  open: boolean;
  name_Prop: string;
  review_Prop: string;
  birth_date_Prop: Date;
  photo_Prop: string;
  status_Prop: string;
  onClose: () => void;
  onCloseSaved: (data: any) => void;
}

export const Book_Modal = ({
  id,
  open,
  name_Prop,
  review_Prop,
  birth_date_Prop,
  photo_Prop,
  status_Prop,
  onClose,
  onCloseSaved,
}: Props) => {
  const [name, setName] = useState(name_Prop);
  const [review, setReview] = useState(review_Prop);
  const [birth_date, setBirth_date] = useState(birth_date_Prop);
  const [status, setStatus] = useState(status_Prop);
  const [photo, setPhoto] = useState(photo_Prop);

  const imageAlt = "https://i.postimg.cc/wMCS8Sj0/happy-smiling-young-man-3d-260nw-2128644164.png";


  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    console.log("Saved");
    onCloseSaved({
      id,
      name,
      review,
      birth_date,
      photo,
    });
  };



  useEffect(() => {
    setPhoto(photo_Prop);
    setName(name_Prop);
    setReview(review_Prop);
    setBirth_date(birth_date_Prop);
    setStatus(status_Prop);

  },[open,photo_Prop,name_Prop,review_Prop,birth_date_Prop,status_Prop]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Datos del autor</DialogTitle>
     
      <DialogContent>
        <div className="j-c-c">
    <img className="rd-10 m-b-3"
    height={150} width={145}
     src={photo_Prop === null || photo_Prop ==="" ? imageAlt : photo } />
        </div>
        <TextField_Customized
          required
          className="m-2"
          label="Nombre completo"
          onChange={(event) => setName(event.target.value)}
          value={name}
          fullWidth
        />
        <TextField_Customized
          className="m-2"
          multiline
          maxRows={4}
          required
          label="Reseña"
          onChange={(event) => setReview(event.target.value)}
          value={review}
          fullWidth
        />

        <TextField_Customized
          required
          type="date"
          className="m-2"
          label="Fecha de nacimiento"
          defaultValue={new Date().toDateString()}
          onChange={(event) => setBirth_date(new Date(event.target.value))}
          value={birth_date}
          fullWidth
        />

        <TextField_Customized
          required
          className="m-2"
          label="Url de la foto"
          onChange={(event) => setPhoto(event.target.value)}
          value={photo}
          fullWidth
        />

        <Box className="m-2">
          {status === "Available" ? (
            <Chip_Success icon={<Check />} color="success" label="Disponible" />
          ) : (
            <Chip_Error icon={<Close />} color="error" label="No disponible" />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button className="button-Secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          className="button-Primary"
          onClick={handleSave}
          disabled={name === "" || review === ""}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

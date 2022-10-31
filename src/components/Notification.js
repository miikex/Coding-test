import React from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

//Popup that shows when an employee/company has been deleted/created
const Notification = (props) => {
  const { notify, setNotify } = props;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({ ...notify, isOpen: false });
  };
  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert severety={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
};
export default Notification;

import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Employees = () => {
  //Getting and setting employees straight from/to our local storage
  const [employees, setEmployees] = useLocalStorage("employees", []);
  //Function for adding a new employees/updating our previouse state
  const addEmployee = (employee) => {
    setEmployees((prevState) => [...prevState, employee]);
  };
  return (
    <Box sx={{ pl: 30 }}>
      <Grid container>
        <EmployeeForm addEmployee={addEmployee} />
      </Grid>
    </Box>
  );
};
export default Employees;

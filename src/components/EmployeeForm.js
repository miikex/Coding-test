import React, { useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  MenuItem,
  Container,
  Box,
  Button,
  Select,
  TextField,
  FormControl,
  InputLabel,
  Typography,
  Toolbar,
} from "@mui/material";
import Notification from "./Notification";

const EmployeeForm = ({ addEmployee }) => {
  const [companies, setCompanies] = useLocalStorage("companies", []);
  const [employee, setEmployee] = useState("");
  const [company, setCompany] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  //Function for adding a new employee
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addEmployee({
      id: nanoid(),
      name: employee,
      company: company,
    });
    setEmployee("");
    setNotify({
      isOpen: true,
      message: "Employee created successfully",
      type: "success",
    });
  };

  //Dropdown menu with all existing companies
  const dropdownMenu = () => {
    let items = [];
    companies.forEach((company) => {
      items.push(
        <MenuItem value={company.company}>{company.company}</MenuItem>
      );
    });
    return items;
  };
  return (
    <Container>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Toolbar />
        <Typography variant="h5">Create a new employee</Typography>
        <form onSubmit={handleFormSubmit}>
          <FormControl>
            <TextField
              type="text"
              id="employee"
              className="input"
              value={employee}
              onInput={(e) => setEmployee(e.target.value)}
              required
              autoFocus
              placeholder="Enter name"
              sx={{ marginTop: 3 }}
            />
            <FormControl>
              <InputLabel>Select Company</InputLabel>
              <Select
                id="company"
                value={company}
                label="Age"
                onChange={(e) => setCompany(e.target.value)}
                sx={{ marginTop: 1 }}
              >
                {dropdownMenu()}
              </Select>
            </FormControl>

            <Button sx={{ marginTop: 1 }} variant="contained" type="submit">
              Add Employee
            </Button>
          </FormControl>
        </form>
        <Notification notify={notify} setNotify={setNotify} />
      </Box>
    </Container>
  );
};
export default EmployeeForm;

import React, { useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  MenuItem,
  Container,
  Box,
  Table,
  TableRow,
  TableCell,
  Button,
  Select,
  FormControl,
  InputLabel,
  TableHead,
  TableBody,
  Typography,
  TextField,
} from "@mui/material";
import Notification from "./Notification";

const CompanyForm = ({ addCompany }) => {
  const [companies, setCompanies] = useLocalStorage("companies", []);
  const [employees, setEmployees] = useLocalStorage("employees", []);
  const [company, setCompany] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

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

  //Function for deleting employee from the company list
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you wish to delete this employee?")) {
      setEmployees((prevState) =>
        prevState.map((c) => (c.id === id ? { ...c, company: "" } : c))
      );
      setNotify({
        isOpen: true,
        message: "Successfully deleted employee",
        type: "success",
      });
    }
  };

  //Creating a new company
  const handleFormSubmit = (e) => {
    // e.preventDefault();
    addCompany({
      id: nanoid(),
      company: companyName,
    });
    setCompanyName("");
    setNotify({
      isOpen: true,
      message: "Company created successfully",
      type: "success",
    });
  };

  //Generating a list of all employees associated with a specific company
  const generateEmployees = () => {
    let items = [];
    employees.forEach((employee) => {
      console.log(employee.company);
      if (employee.company !== "" && employee.company === company) {
        items.push(
          <TableRow>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.company}</TableCell>
            <TableCell>
              <Button onClick={() => deleteEmployee(employee.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      }
    });
    return items;
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Create a new company</Typography>
        <form onSubmit={handleFormSubmit}>
          <FormControl>
            <TextField
              type="text"
              id="companyName"
              className="input"
              value={companyName}
              onInput={(e) => setCompanyName(e.target.value)}
              required
              autoFocus
              placeholder="Enter name"
              sx={{ marginTop: 3 }}
            />
            <Button sx={{ marginTop: 1 }} type="submit" variant="contained">
              Add Company
            </Button>
          </FormControl>
        </form>

        <Typography sx={{ marginTop: 3 }}>
          Select a company to show all current employees
        </Typography>
        <FormControl sx={{ width: "50%", marginTop: 2 }}>
          <InputLabel>Select Company</InputLabel>
          <Select
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            {dropdownMenu()}
          </Select>
        </FormControl>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{generateEmployees()}</TableBody>
        </Table>
        <Notification notify={notify} setNotify={setNotify} />
      </Box>
    </Container>
  );
};
export default CompanyForm;

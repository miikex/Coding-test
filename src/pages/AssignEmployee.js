import { FormLabel, Typography } from "@mui/material";
import React, { useState } from "react";
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
  TableBody,
  TableHead,
} from "@mui/material";
import Notification from "../components/Notification";

const AssignEmployee = () => {
  const [companies, setCompanies] = useLocalStorage("companies", []);
  const [employees, setEmployees] = useLocalStorage("employees", []);
  const [company, setCompany] = useState("");
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
  });

  //Dropdown menu with all existing companies
  const dropdownMenu = () => {
    let items = [];
    companies.forEach((e) => {
      items.push(<MenuItem value={e.company}>{e.company}</MenuItem>);
    });
    return items;
  };

  //Function for updating employees
  const updateEmployee = (id) => {
    setEmployees((prevState) =>
      prevState.map((c) => (c.id === id ? { ...c, company: company } : c))
    );
    setCompany("");

    setNotify({
      isOpen: true,
      message: "Employee successfully assigned to company",
      type: "success",
    });
  };

  //Generating a list of all unassigned employees
  const showUnassignedEmployees = () => {
    let items = [];
    employees.forEach((employee) => {
      if (employee.company === "") {
        items.push(
          <TableRow>
            <TableCell>{employee.name}</TableCell>
            <FormControl sx={{ width: "100%" }}>
              <FormLabel>Select Company</FormLabel>
              <Select onChange={(e) => setCompany(e.target.value)}>
                {dropdownMenu()}
              </Select>
            </FormControl>
            <TableCell>
              <Button
                disabled={!company}
                onClick={() => updateEmployee(employee.id)}
              >
                save
              </Button>
            </TableCell>
          </TableRow>
        );
      }
    });
    return items;
  };
  return (
    <Box sx={{ pl: 30 }}>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Unassigned employees</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{showUnassignedEmployees()}</TableBody>
          </Table>
          <Notification notify={notify} setNotify={setNotify} />
        </Box>
      </Container>
    </Box>
  );
};
export default AssignEmployee;

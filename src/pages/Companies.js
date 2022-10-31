import React from "react";
import CompanyForm from "../components/CompanyForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const Companies = () => {
  //Getting and setting companies straight from/to our local storage
  const [companies, setCompanies] = useLocalStorage("companies", []);

  //Function for adding a new company/updating our previouse state
  const addCompany = (company) => {
    setCompanies((prevState) => [...prevState, company]);
  };

  return (
    <Box sx={{ pl: 30 }}>
      <Grid container>
        <CompanyForm addCompany={addCompany} />
      </Grid>
    </Box>
  );
};
export default Companies;

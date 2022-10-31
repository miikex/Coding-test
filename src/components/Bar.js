import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { People, Business, Assignment } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Afry X Code Test
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText secondary={"Employees"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/companies" style={{ textDecoration: "none" }}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Business />
                  </ListItemIcon>
                  <ListItemText secondary={"Companies"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/assignEmployees">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText secondary={"Assign Employees"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Navbar;

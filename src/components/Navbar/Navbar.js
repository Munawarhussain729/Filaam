import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import "./Navbar.css";
import { InputBase } from "@mui/material";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography style={{ color: "white" }} variant="h6" sx={{ my: 2 }}>
        Filaam
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem className="side-navbar" key={item} disablePadding>
            <Link to="/" sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </Link>
          </ListItem>
        ))}
      </List>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        className="searchBar"
      />
      <IconButton
        style={{ color: "white" }}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar className="navbar">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Filaam
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link
                    className="navbar-link"
                    to="/"
                    key={item}
                    sx={{ color: "#fff" }}
                  >
                    {item}
                  </Link>
                ))}
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  className="searchBar"
                />
                <IconButton
                  style={{ color: "white" }}
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon color="white" />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Box className="side-navbar" component="nav">
            <Drawer
              container={container}
              // variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      )}
    </>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;

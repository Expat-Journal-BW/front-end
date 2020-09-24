import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Signin from "./Signin.js";
<<<<<<< HEAD:expat-journal/src/components/navbar.js
import Signup from "./Signup"
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
const NavBar =() => {
=======
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
export default function NavBar() {
  // hey hhheeeeyyyy adding more test to see if it'll push
  //test add
>>>>>>> 6c61a4ba8b1e0cc3273ee95866e7bb426f73aa61:expat-journal/src/components/NavBar.js
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Expat Journal</Typography>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
<<<<<<< HEAD:expat-journal/src/components/navbar.js
               <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
               <MenuItem onClick={handleClose}>Add story</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/signin">Sign in </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/signup">Sign up</MenuItem>
=======
              <MenuItem onClick={handleClose}>Add story</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/signin">
                Sign in{" "}
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/signup">
                Sign up
              </MenuItem>
>>>>>>> 6c61a4ba8b1e0cc3273ee95866e7bb426f73aa61:expat-journal/src/components/NavBar.js
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
<<<<<<< HEAD:expat-journal/src/components/navbar.js

export default NavBar;
=======
>>>>>>> 6c61a4ba8b1e0cc3273ee95866e7bb426f73aa61:expat-journal/src/components/NavBar.js

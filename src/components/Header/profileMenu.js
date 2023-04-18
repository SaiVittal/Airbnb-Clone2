import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "1rem",
            minWidth: "200px",
            padding: "0rem",
            boxShadow:
              "0 1px 2px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.05)",
          },
        }}
        className="menu-items"
      >
        <MenuItem onClick={handleClose} className="menu-items">
          Sign Up
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Login
        </MenuItem>
        <div
          style={{ height: "1px", backgroundColor: "#ddd", width: "100%" }}
        ></div>
        <MenuItem onClick={handleClose} className="menu-items">
          Airbnb your home
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-items">
          Help
        </MenuItem>
      </Menu>
    </div>
  );
}

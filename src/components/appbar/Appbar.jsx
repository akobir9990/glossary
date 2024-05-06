import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { appbarAuthMenu } from "./const";
import { NavLink } from "react-router-dom";
import { HOME_PAGE } from "../../router/const";
import logoRu from "../../assets/glossaries.png";
import { useTranslation } from "react-i18next";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t, i18n } = useTranslation();

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      className="fixed w-[100%]"
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavLink to={HOME_PAGE}>
              <img className="w-11 rounded-md" src={logoRu} alt="" />
            </NavLink>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              fontSize: "30px",
              fontWeight: "semibold",
            }}
          >
            {t("title")}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ width: "40px", height: "40px" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {appbarAuthMenu.map((item) => {
                  return (
                    <NavLink to={item.navLink} key={item.id}>
                      <MenuItem>{t(item.title)}</MenuItem>
                    </NavLink>
                  );
                })}
                <div className="px-4 py-[6px] flex gap-2">
                  <button
                    onClick={() => handleChangeLang("en")}
                    className={`shadow-sm px-4 py-[6px] text-[grey] hover:border-[teal] hover:text-[teal] transition-all rounded-md
                      ${
                        i18n.language === "en"
                          ? "border border-primaryColor text-primaryColor shadow-sm shadow-primaryColor"
                          : ""
                      }`}
                  >
                    En
                  </button>
                  <button
                    onClick={() => handleChangeLang("ru")}
                    className={`shadow-sm px-4 py-[6px] text-[grey] hover:border-[teal] hover:text-[teal] transition-all rounded-md
                    ${
                      i18n.language === "ru"
                        ? "border border-primaryColor text-primaryColor shadow-sm shadow-primaryColor"
                        : ""
                    }`}
                  >
                    Ru
                  </button>
                </div>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

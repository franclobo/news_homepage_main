import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "New", "Popular", "Trending", "Categories"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ flexDirection: { xs: "row-reverse", md: "row" } }}
        >
          <Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "hsl(240, 100%, 5%)",
              "&:hover": { color: "hsl(5, 85%, 63%)" },
              textDecoration: "none",
            }}
          >
            W.
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                height: "100vh",
                "& .MuiMenu-paper": {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "hsl(0, 0%, 100%)",
                  color: "hsl(236, 13%, 42%)",
                  boxShadow: "none",
                  borderRadius: "0",
                  width: "50%",
                  height: "100vh",
                  padding: "0",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <IconButton
                  aria-label="Close"
                  onClick={handleCloseNavMenu}
                  color="inherit"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      background: "none",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "hsl(236, 13%, 42%)",
                      "&:hover": {
                        color: "hsl(5, 85%, 63%)",
                        background: "none",
                        fontFamily: "inter",
                        fontWeight: "400",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h1"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "hsl(240, 100%, 5%)",
              "&:hover": { color: "hsl(5, 85%, 63%)" },
              textDecoration: "none",
            }}
          >
            W.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "hsl(236, 13%, 42%)",
                  display: "block",
                  "&:hover": { color: "hsl(5, 85%, 63%)", background: "none" },
                  fontFamily: "inter",
                  fontWeight: 400,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

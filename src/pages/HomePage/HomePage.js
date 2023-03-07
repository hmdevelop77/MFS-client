import * as React from "react";

import Box from "@mui/material/Box";

import SideBarApp from "../../components/SideBar/SideBar";







export default function Homepage() {
  

  return (
    <Box sx={{ display: "flex" }}>
    duihefnirkenfirn
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider /> */}
      {/* <List> */}
      {/* <Sidebar>
            <Menu>
              <MenuItem component={<Link to="/" />}> Home</MenuItem>
              <MenuItem component={<Link to="/podcasts" />}> Podcasts</MenuItem>
              <MenuItem component={<Link to="/budget" />}> Budget</MenuItem>
              {isLoggedIn && (
                <>
                <MenuItem component={<Link onClick={logOutUser}/>}>Logout</MenuItem>
                  <MenuItem component={<Link to="/profile" />}>
                    {" "}
                    Profile
                  </MenuItem>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <MenuItem component={<Link to="/login" />}> login</MenuItem>
                  <MenuItem component={<Link to="/signup" />}> signup</MenuItem>
                </>
              )}
            </Menu>
          </Sidebar> */}
      <SideBarApp></SideBarApp>
      {/* </List> */}
      {/* </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main> */}
    </Box>
  );
}

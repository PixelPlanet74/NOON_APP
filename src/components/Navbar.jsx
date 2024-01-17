import * as React from 'react';
import "../App.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import noon_logo from '../assets/noon_logo.svg'
import GoogleMaps from './SearchBar';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ bgcolor: "yellow" }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img style={{ width: "100px" }} src={noon_logo} alt="" />
                    </Typography>
                    <GoogleMaps />
                    <Box

                        sx={{
                            marginLeft: "25px",
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Search" id="fullWidth" />
                    </Box>

                    <Typography style={{ display: "flex", justifyContent: "space-around", width: "30%", paddingLeft: "5%", color: "black", }}>
                        <div className="cont">
                            <h3>العربية
                            </h3></div><hr />
                        <div className="cont" style={{ display: "flex", alignItems: "center" }}><h3>

                            Log in </h3><PersonIcon /></div><hr />
                        <div className="cont" style={{ display: "flex", alignItems: "center" }}><h3>

                            Wishlist </h3><FavoriteBorderIcon /></div><hr />

                        <div className="cont" style={{ display: "flex", alignItems: "center" }}><h3>

                            Cart </h3><AddShoppingCartIcon /></div>
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
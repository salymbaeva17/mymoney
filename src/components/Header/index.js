import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                           Aitolkun's money
                        </Typography>
                        <Button color="inherit">Сбросить всё</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {/*<nav className="navbar navbar-light bg-primary py-3">*/}
            {/*    <div className="container">*/}
            {/*        <a className="navbar-brand">{user.name}'s money</a>*/}
            {/*        <button className="btn red-btn ms-auto d-block text-white" onClick={() => dispatch(resetAll())}>Сбросить все</button>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </header>
    );
};

export default Header;
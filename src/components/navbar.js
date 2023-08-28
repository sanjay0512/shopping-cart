import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


export default function NavBar({ page, badgeContent }) {
    const navigate = useNavigate();
    const styles = {
        appBar: {
            backgroundColor: 'darkblue', // Change the color here
        },
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {page}
                    </Typography>

                    <Badge badgeContent={badgeContent} color="primary">
                        <IconButton onClick={() => { navigate('/cart') }}>
                            <ShoppingCartIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Badge>

                    <IconButton onClick={() => { navigate('/') }}>
                        <HomeIcon sx={{ color: "white" }} />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
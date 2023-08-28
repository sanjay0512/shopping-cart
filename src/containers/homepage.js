import React, { useState, useEffect, useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ListItem from "../components/listitem";
import NavBar from "../components/navbar";
import { Context } from "../context";

export default function HomePage() {
    const [data, setData] = useState([]);
    const [cart, setcart] = useContext(Context);
    const cartsum = cart.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    const styles = {
        listItemContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center', // Align items horizontally to the center
            alignItems: 'center', // Align items vertically to the center
            backgroundColor: 'rgb(247 246 247)'
        }
    }

    return (
        <div>
            <NavBar page={'Home'} badgeContent={cart.length > 0 ? cartsum : 0} />
            {/* {JSON.stringify(cart)} */}
            <div style={styles.listItemContainer}>
                {data.length > 0 ? (
                    data.map((serviceData) => {
                        return (
                            <ListItem servicedata={serviceData} />
                        );
                    })
                ) :
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
            </div>
        </div>
    );
}

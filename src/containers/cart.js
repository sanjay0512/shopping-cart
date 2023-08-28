import React, { useContext } from "react";
import CartComponent from "../components/cartitem";
import Button from '@mui/material/Button';
import NavBar from "../components/navbar";
import { Context } from "../context";

export default function Cart() {
    const [cart, setcart] = useContext(Context)
    const cartsum = cart.reduce((sum, item) => sum + item.quantity, 0);

    const styles = {
        cartItemContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center', // Align items horizontally to the center
            alignItems: 'center', // Align items vertically to the center
            backgroundColor: 'rgb(247 246 247)'
        }
    }

    return (
        <div>
            <NavBar page={'Cart'} badgeContent={cart.length > 0 ? cartsum : 0} />
            <div style={styles.cartItemContainer}>
                
                {cart.length > 0 ?
                    cart.map((cartdata) => {
                        return (
                            <CartComponent cartdata={cartdata} />
                        );
                        
                    })
                
                    : <p>Nothing in the cart</p>}
            </div>
            

        </div>
    )
}
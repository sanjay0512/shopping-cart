import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Context } from '../context';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});

export default function ListItem({ servicedata }) {
    const [expanded, setExpanded] = React.useState(false);
    const [quantity, setquantity] = useState(0)
    const [cart, setcart] = useContext(Context)

    const handleAdd = () => {
        const newItem = {
            quantity: quantity,
            details: servicedata
        }
        const newCart = [...cart, newItem]
        setcart(newCart)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardContainer>
            <Card sx={{ width: 345, margin: '16px' }}>
                <CardHeader
                    title={servicedata.title + '-' + servicedata.category}
                    subheader={servicedata.price + '$'}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={servicedata.image}
                    alt="Paella dish"
                />
                <CardContent style={{ textAlign: "center" }}>
                    <IconButton color="primary" onClick={() => {setquantity(quantity-1)}}>
                        <ArrowLeftIcon />
                    </IconButton>
                    <TextField label='quantity' value={quantity} style={{width: "27%"}}/>
                    <IconButton color="primary" onClick={() => {setquantity(quantity+1)}}>
                        <ArrowRightIcon />
                    </IconButton><br/><br/>
                    {quantity > 0 ? <Button fullWidth variant='contained' onClick={handleAdd}>Add to Cart</Button> : <Button disabled fullWidth variant='contained'>Add to Cart</Button> }
                </CardContent>
                <CardActions disableSpacing>
                    <Rating name="read-only" value={servicedata.rating.rate} precision={0.1} readOnly />
                    <Typography>View Item Description:</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {servicedata.description}
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </CardContainer>

    );
}
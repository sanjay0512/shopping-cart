import React, { useContext } from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Context } from '../context';
import Button from '@mui/material/Button';


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
    flexDirection: 'row', // Changed from 'column' to 'row'
    height: '100%',
});

export default function CartComponent({ cartdata }) {
    const [expanded, setExpanded] = React.useState(false);
    const [cart, setCart] = useContext(Context);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardContainer>
            <Card sx={{ width: 345, margin: '16px' }}>
                <CardHeader
                    title={cartdata.details.title + '-' + cartdata.details.category}
                    subheader={cartdata.details.price + '$'}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={cartdata.details.image}
                    alt="Paella dish"
                />
                <CardContent style={{ textAlign: 'center' }}>
                    quantity: {cartdata.quantity} <br /> Total price: {cartdata.details.price * cartdata.quantity}$ <br/><br/>
                    <Button fullWidth color= 'error' variant='contained' onClick={() => {
                        cart.splice(0,1)
                    }}>Remove from Cart</Button>
                </CardContent>
                <CardActions disableSpacing>
                    <Rating name="read-only" value={cartdata.details.rating.rate} precision={0.1} readOnly />
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
                        <Typography paragraph>{cartdata.details.description}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </CardContainer>
    );
}

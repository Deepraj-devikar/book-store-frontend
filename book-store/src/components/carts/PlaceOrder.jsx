import { Button, ButtonGroup, MenuItem, Paper, Select } from "@mui/material";
import './PlaceOrder.css';
import RoomIcon from '@mui/icons-material/Room';
import image from '../../images/Image-11@2x.png';

export default function PlaceOrder() {
    return(
        <div className="cart-placeorder-box">
            <Paper style={{
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                border: '1px solid #DCDCDC',
                borderRadius: '1px',
                opacity: 1
            }}>
                <div className="cart-place-order-content">
                    <div className="cart-place-order-title-n-location">
                        <div className="cart-place-order-title">
                            My Cart (1)
                        </div>
                        <div className="cart-place-order-location">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={1}
                                size="small"
                            >
                                <MenuItem value={1}>
                                    <div className="cart-place-order-location-item">
                                        <RoomIcon />
                                        <div className="cart-place-order-location-item-text">
                                            BridgeLabz Solutions LLP, No...
                                        </div>
                                    </div>
                                </MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="cart-place-order-product">
                        <div className="cart-place-order-product-image">
                            <img src={image} width="100%"/>
                        </div>
                        <div className="cart-place-order-product-detail">
                            <div className="cart-place-order-product-detail-book-name">
                                Don't Make Me Think
                            </div>
                            <div className="cart-place-order-product-detail-author-name">
                                by Steve Krug
                            </div>
                            <div className="cart-place-order-product-detail-price">
                                <div className="cart-place-order-product-detail-price-right">
                                    Rs. 1500
                                </div>
                                <div className="cart-place-order-product-detail-price-wrong">
                                    Rs. 2000
                                </div>
                            </div>
                            <div className="cart-place-order-product-detail-cart-buttons">
                                <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                                    <Button size="small"> + </Button>
                                    <Button size="small"> 5 </Button>
                                    <Button size="small"> - </Button>
                                </ButtonGroup>
                                <Button variant="text" sx={{
                                    textTransform: 'none',
                                    textAlign: 'left',
                                    font: '15px Lato',
                                    letterSpacing: '0px',
                                    color: '#0A0102',
                                    opacity: 1
                                }}>
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-place-order-make-place-order-button">
                        <Button variant="contained">
                            PLACE ORDER
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
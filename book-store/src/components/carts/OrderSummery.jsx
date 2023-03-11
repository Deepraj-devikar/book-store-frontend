import { Button, Paper } from "@mui/material";
import image from '../../images/Image-11@2x.png';
import './OrderSummery.css';

export default function OrderSummery() {
    return (
        <div className="cart-order-summery-box">
            <Paper style={{
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                border: '1px solid #DCDCDC',
                borderRadius: '1px',
                opacity: 1
            }}>
                <div className="cart-order-summery-content">
                    <div className="cart-order-summery-title">
                        Order summery
                    </div>
                    <div className="cart-order-summery-product">
                        <div className="cart-order-summery-product-image">
                            <img src={image} width="100%"/>
                        </div>
                        <div className="cart-order-summery-product-detail">
                            <div className="cart-order-summery-product-detail-book-name">
                                Don't Make Me Think
                            </div>
                            <div className="cart-order-summery-product-detail-author-name">
                                by Steve Krug
                            </div>
                            <div className="cart-order-summery-product-detail-price">
                                <div className="cart-order-summery-product-detail-price-right">
                                    Rs. 1500
                                </div>
                                <div className="cart-order-summery-product-detail-price-wrong">
                                    Rs. 2000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-order-summery-checkout-button">
                        <Button variant="contained">
                            PLACE ORDER
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
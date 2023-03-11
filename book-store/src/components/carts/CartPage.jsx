import { Breadcrumbs, Link } from "@mui/material";
import CloseBox from "./CloseBox";
import CustomerDetail from "./CustomerDetail";
import OrderSummery from "./OrderSummery";
import PlaceOrder from "./PlaceOrder";
import './CartPage.css';

export default function CartPage() {
    return (
        <div className="cart-page-breadcrum-n-content">
            <div className="cart-page-breadcrum">
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/dashboard" sx={{
                        textAlign: 'left',
                        font: 'normal normal normal 12px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#9D9D9D',
                        opacity: 1
                    }}>
                        Home
                    </Link>
                    <Link underline="hover" color="text.primary" sx={{
                        textAlign: 'left',
                        font: 'normal normal normal 12px/16px Roboto',
                        letterSpacing: '0px',
                        color: '#0A0102',
                        opacity: 1
                    }}>
                        My Cart
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="cart-page-content">
                <PlaceOrder />
                <CloseBox />
                <CustomerDetail />
                <OrderSummery />
            </div>
        </div>
    );
}
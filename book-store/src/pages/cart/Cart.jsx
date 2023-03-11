import Container from "@mui/material/Container";
import Header from "../../components/header/Header";
import './Cart.css';
import CartPage from "../../components/carts/CartPage";

export default function Cart(props) {
    return (
        <div>
            <Header />
            <Container>
                <CartPage />
            </Container>
        </div>
    );
}

import Container from "@mui/material/Container";
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import './Dashboard.css';
import { connect } from "react-redux";
import BookPage from "../../components/books/BookPage";
import CartPage from "../../components/carts/CartPage";

function Dashboard(props) {
    return (
        <div>
            <Header />
            <Container>
                {
                    props.pageView == 'home' ? <Home /> : 
                    (props.pageView == 'book' ? <BookPage data={props.book}/> : 
                    (props.pageView == 'cart' ? <CartPage /> : ''))
                }
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pageView: state.DashboardReducer.pageView,
        book: state.DashboardReducer.book
    }
}

export default connect(mapStateToProps) (Dashboard);
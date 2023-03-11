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
                    props.bookView == null ? <Home /> : <BookPage data={props.bookView}/> 
                    // <CartPage />
                }
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('in dashboard redux, ', state);
    return {
        bookView: state.BookReducer.bookView
    }
}

export default connect(mapStateToProps) (Dashboard);
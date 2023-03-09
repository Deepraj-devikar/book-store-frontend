import { Container } from "@mui/material";
import Book from "../../components/books/Book";
import Header from "../../components/header/Header";

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Container>
                <Book/>
            </Container>
        </div>
    );
}
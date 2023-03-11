import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Header from "../../components/header/Header";
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';
import './OrderPlaced.css';
import { useNavigate } from "react-router";

function createData(email, contact, address) {
    return { email, contact, address };
}

const rows = [
    createData('admin@bookstore.com', '+91 8163475881', '42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034')
];

export default function OrderPlaced() {
    
    const navigate = useNavigate();

    const continueShoppingClickHandler = () => {
        navigate('/dashboard');
    }

    return (
        <div>
            <Header />
            <Container>
                <div className="order-place-content">
                    <StarRateIcon sx={{ color: yellow[700] }} fontSize="large"/>
                    <div className="order-placed-successfully-text"> 
                        Order placed successfully
                    </div>
                    <div className="order-places-hurray-text">
                        hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Email us</TableCell>
                                    <TableCell align="center">Contact us</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.email}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.email}
                                        </TableCell>
                                        <TableCell align="center">{row.contact}</TableCell>
                                        <TableCell align="center"
                                            sx={{width: '270px'}}
                                        >{row.address}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button variant="contained" onClick={continueShoppingClickHandler}>
                        Continue shopping
                    </Button>
                </div>
            </Container>
        </div>
    );
}
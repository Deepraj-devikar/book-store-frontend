import { Breadcrumbs, Button, Container, Link } from "@mui/material";
import Header from "../../components/header/Header";
import './Wishlist.css';
import WishlistBook from "../../components/books/WishlistBook";
import { useEffect, useState } from "react";
import { GetWishlistApi, RemoveFromWishlistApi } from "../../services/DataService";

export default function Wishlist() {
    const [state, setState] = useState({
        wishlistData: {
            books: []
        },
        updateWishlist: 0
    });

    useEffect(
        () => {
            GetWishlistApi()
            .then(response => {
                if(response.status == 200){
                    setState(prevState => ({
                        ...prevState,
                        wishlistData: response.data.data
                    }));
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        [state.updateWishlist]
    );

    const deleteHandler = (bookID) => {
        RemoveFromWishlistApi(bookID)
        .then(response => {
            if(response.status == 202) {
                setState(prevState => ({
                    ...prevState,
                    updateWishlist: prevState.updateWishlist + 1
                }));
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <Header />
            <Container>
                <div className="wishlist-page-breadcrum-n-content">
                    <div className="wishlist-page-breadcrum">
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
                                My Whishlist
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="wishlist-page-content">
                        <div className="wishlist-page-table-head">
                            <div >
                                My Wishlist (02)
                            </div>
                        </div>
                        {
                            state.wishlistData.books.map(book => (
                                <div className="wishlist-page-table-content">
                                    <WishlistBook key={book.prductID} data={book} deleteHandler={deleteHandler}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}
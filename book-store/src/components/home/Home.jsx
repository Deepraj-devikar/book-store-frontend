import { Grid, MenuItem, Pagination, Select } from "@mui/material";
import { useEffect, useState } from "react";
import Book from "../../components/books/Book";
import { GetAllBooksApi } from "../../services/DataService";
import './Home.css';

export default function Home() {
    const [state, setState] = useState({
        books: [],
        pageNumber: 1,
        pageLimit: 12,
        startBookIndex: 0,
        sort: 'latest'
    });

    useEffect(
        () => {
            GetAllBooksApi()
            .then(response => {
                console.log(response);
                if(response.status == 200){
                    setState(prevState => ({...prevState, books: response.data.data}))
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        []
    );

    const pageChangeHandler = (e, pageNumber) => {
        setState(prevState => ({
            ...prevState,
            pageNumber,
            startBookIndex: parseInt((pageNumber - 1) * state.pageLimit)
        }));
    };

    return (
        <div className="dashboard-home">
            <div className="dashboard-home-query-meta-data">
                <div className="dashboard-home-query-meta-data-item-count">
                    <div className="dashboard-home-query-meta-data-item-name">
                        Books
                    </div>
                    <div className="dashboard-home-query-meta-data-count-number">
                        (22)
                    </div>
                </div>
                <div className="dashboard-home-query-meta-data-sort-by">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.sort}
                        size="small"
                    >
                        <MenuItem value='latest'>Sort by latest</MenuItem>
                        <MenuItem value='oldest'>Sort by oldest</MenuItem>
                        <MenuItem value='price-l-h'>Sort by price low-high</MenuItem>
                        <MenuItem value='price-h-l'>Sort by price hign-low</MenuItem>
                    </Select>
                </div>
            </div>
            <Grid container spacing={2}>
                {
                    state.books.slice(state.startBookIndex, state.startBookIndex + state.pageLimit).map(book => (
                        <Grid item>
                            <Book 
                                key={book._id}
                                data={book}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Pagination shape="rounded"
                count={parseInt(state.books.length / state.pageLimit + 1)} 
                onChange={(e, pageNumber) => pageChangeHandler(e, pageNumber)}
            />
        </div>
    );
}
import { BOOK_PAGE, CART_PAGE } from "./constants";

const initalState = {
    pageView: 'home',
    book: null
}

export default function DashboardReducer(state = initalState, action) {
    switch (action.type) {
        case BOOK_PAGE:
            return {
                ...state, 
                pageView: 'book',
                book: action.book
            };
        case CART_PAGE:
            return {
                ...state, 
                pageView: 'cart'
            };
        default:
            return state;
    }    
}
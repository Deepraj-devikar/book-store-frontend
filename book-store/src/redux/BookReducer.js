import { BOOK_PAGE } from "./constants";

const initalState = {
    bookView: null
}

export default function BookReducer(state = initalState, action) {
    switch (action.type) {
        case BOOK_PAGE:
            return {
                ...state, 
                bookView: action.book
            };
        default:
            return state;
    }    
}
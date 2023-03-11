import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+localStorage.getItem('authorizationToken')}
});

export const GetAllBooksApi = () => {
    return instance.get(`books`);
};

export const AddToCartApi = (bookID) => {
    return instance.post(`carts/add/book/${bookID}`);
};

export const RemoveFromCartApi = (bookID) => {
    return instance.post(`carts/remove/book/${bookID}`);
};

export const AddToWishlistApi = (bookID) => {
    return instance.post(`wishlists/add/book/${bookID}`);
} 

export const GetCartApi = () => {
    return instance.get(`carts`);
}
import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
    timeout: 10000,
    headers: {'Authorization': 'Bearer '+localStorage.getItem('authorizationToken')}
});

export const GetAllBooksApi = async () => {
    return await instance.get(`books`);
};

export const AddToCartApi = async (bookID) => {
    return await instance.post(`carts/add/book/${bookID}`);
};

export const RemoveFromCartApi = async (bookID) => {
    return await instance.post(`carts/remove/book/${bookID}`);
};

export const RemoveAllBooksFromCartApi = async (bookID) => {
    return await instance.post(`carts/remove/all-books/${bookID}`);
};

export const AddToWishlistApi = async (bookID) => {
    return await instance.post(`wishlists/add/book/${bookID}`);
} 

export const GetCartApi = async () => {
    return await instance.get(`carts`);
}

export const getCustomerApi = async () => {
    return await instance.get(`customers`);
}
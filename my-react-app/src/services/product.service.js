import axios from 'axios';

export const getproduct = (callback) => {
    return axios.get('https://fakestoreapi.com/products').then((res) => {
        callback(res.data);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
}
export const getDetailproduct = (id,callback) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        callback(res.data);
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
}
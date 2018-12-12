// import { Actions } from 'react-native-router-flux';
// import firebase from 'firebase';   
// import {
//     PRODUCT_UPDATE,
//     PRODUCT_CREATE,
//     PRODUCT_FETCH_SUCCESS
// } from './types';

// export const productUpdate = ({ prop, value }) => {
//     return{
//         type: PRODUCT_UPDATE,
//         payload: { prop, value }
//     };
// }

// export const productCreate = ({ cantidad, codigo, nombre, precio, visitado }) => {
//     const { currentUser } = firebase.auth();

//     var product = productsFetch();

//     return (dispatch) => {
//         firebase.database().ref(`/supermarkethelper-c8bcc/${currentUser.uid}/${product.nombre}`)
//             .push({ cantidad, codigo, nombre, precio, visitado })
//             .then(() => {
//                 dispatch({ type: PRODUCT_CREATE });
//             });
//     }
// }
        
// export const productsFetch = ({ data }) => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/supermarkethelper-c8bcc/productos/${data.data}`)
//             .on('value', snapshot => {
//         dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() });
//         });
//     } 
// }

// export const usersFetch = () => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/supermarkethelper-c8bcc/${currentUser.uid}`)
//             .on('value', snapshot => {
//         dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val() });
//         });
//     } 
// }
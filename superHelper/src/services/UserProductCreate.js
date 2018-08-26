import firebase from 'firebase';
import ProductsFetch from './ProductsFetch';   

const UserProductCreate = ({ cantidad, visitado, data }) => {
    const { currentUser } = firebase.auth();

    var product = ProductsFetch({data});

    return (dispatch) => {
        firebase.database().ref(`/supermarkethelper-c8bcc/${currentUser.uid}/${product.nombre}`)
            .update({ 
                cantidad: cantidad,
                codigo: data.data,
                nombre: product.nombre,
                precio: product.precio,
                visitado: visitado
            });
    }
}

export default UserProductCreate;
        
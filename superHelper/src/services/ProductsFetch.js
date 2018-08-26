import firebase from 'firebase';   

const ProductsFetch = ({ data }) => {
    return (dispatch) => {
        firebase.database().ref(`/supermarkethelper-c8bcc/productos/${data.data}`)
            .once('value').then( (snapshot) => {
                snapshot.val();
        });
    } 
}

export default ProductsFetch;
import firebase from 'firebase';  

const UsersFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/supermarkethelper-c8bcc/${currentUser.uid}`)
            .once('value').then( (snapshot) => {
            snapshot.val();
        });
    } 
}

export default UsersFetch;
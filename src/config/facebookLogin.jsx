import { firebase } from '../firebase'
const facebook_login = (res, rej) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user.photoURL)
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
firebase.database().ref('/user/'+user.uid).set(create_user)
.then(()=>{
    alert("user login succesfully")
}) 

            res({
                name: user.displayName,
                image: user.photoURL,
                email: user.email,
                uId: user.uid
            })//yaha sy data structure kr k send kr dena h so waha easily statemain save ho jar


        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;

            rej(errorMessage)
        });
}
export default facebook_login;
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDkrGxWZWo3vjZKLITrREhVvtK-SqgejaA",
    authDomain: "react-website-2278e.firebaseapp.com",
    databaseURL: "https://react-website-2278e.firebaseio.com",
    projectId: "react-website-2278e",
    storageBucket: "react-website-2278e.appspot.com",
    messagingSenderId: "1008018191003",
    appId: "1:1008018191003:web:5a79efa929a8cf38640c3e",
    measurementId: "G-FBKBBNPG2S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const getAdds = (resolve, reject) => {//receove both attr here
    var data = []
    firebase.database().ref(`All Ads`).once('value')// yaha py mene All Ads ka path diya h
        .then((returnedData) => {
            for (var property in returnedData.val()) {//read for in loop on internet
                // console.log(property)
                data.push(returnedData.val()[property])
            }
            resolve(data)//if the data is returned , resolve the promise 
        })
        .catch((error) => {//if an error is received , return taht reeor as reject 
            reject(error.message)
        })
}

const getAddData = (resolve, reject, iId) => {//receove both attr here
    firebase.database().ref(`All Ads/${iId}`).once('value')
        .then((data) => {
            resolve(data.val())//if the data is returned , resolve the promise 
        })
        .catch((error) => {//if an error is received , return taht reeor as reject 
            reject(error.message)
        })
}

const getUserData = (resolve, reject, uId) => {//receove both attr here
    firebase.database().ref(`user/${uId}`).once('value')
        .then((data) => {
            console.log(data.val())
            resolve(data.val())//if the data is returned , resolve the promise 
        })
        .catch((error) => {//if an error is received , return taht reeor as reject 
            reject(error.message)
        })
}
export { getAdds, getAddData, getUserData, firebase }
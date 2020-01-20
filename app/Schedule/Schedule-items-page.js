const firebase = require("nativescript-plugin-firebase");
const HomeItemsViewModel = require("./Schedule-items-view-model");

 firebase.login({
     type: firebase.LoginType.PASSWORD,
     passwordOptions: {
         email: 'petergira95@gmail.com',
         password: 'theirpassword'
     }
 })
 .then(result => {
     console.log('OK', result)
     alert({
         title: 'Autetenticazione OK',
         message: `Ciao, ${result.email}`,
         okButtonText: 'OK'
     })
 })
 .catch(error => console.error(error))

// firebase.logout()
// .then(() => console.log('LOGOUT'))
// .catch(error => console.error(error))
/*    // cambiare password
 firebase.sendPasswordResetEmail('petergira95@gmail.com')
 .then(() => console.log('Password reset by email'))
 .catch(error => console.error('error', error))
*/
firebase.getCurrentUser()
.then(user => console.log('getCurrentUser', user))
.catch(error => console.error('getCurrentUser', error))

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

function showDialog (){
    console.log(`login`);
    dialogs.login({
        title: `Login`,
        message: `Enter credential`,
        okButtonText: "Go",
        cancelButtonText: "Cancel",

        userName: "User",
        password: "Password"
    }).then(function(r){
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password)
        if (r.result){
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: r.userName,
                    password: r.password
                }
            })
            .then(result => {
                console.log(`OK`, result)
                alert({
                    title: `Autenticazione OK`,
                    message: `Ciao, ${result.email}`,
                    okButtonText: `OK`
                })

            })
        }
    });
}


exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = this.showDialog



// console.log("auth server : 10.30.3.3");

function User() {

    var username;
    var password;

    function doLogin(uname, pword) {
        username = uname;
        password = pword;

        console.log("Username :: "+username);
        console.log("Password :: "+password);
    }

    var publicAPI = {
        login:doLogin
    }

    return publicAPI;
}

var fred = User();
fred.login("IsuruK", "1qaz2wsx@987");



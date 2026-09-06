/* =====================================================
   MY WEBSITE - MAIN SCRIPT
   Registration + Login + Home Access System
===================================================== */


/* =====================================================
   STORAGE KEYS
===================================================== */

const USERS_KEY = "mywebsite_registered_users";
const CURRENT_USER_KEY = "mywebsite_current_user";
const HOME_ACCESS_KEY = "portal_home_access_granted";


/* =====================================================
   GET ALL REGISTERED USERS
===================================================== */

function getUsers() {

    try {

        const users =
            JSON.parse(
                localStorage.getItem(USERS_KEY)
            );

        return Array.isArray(users)
            ? users
            : [];

    }

    catch (error) {

        return [];

    }

}


/* =====================================================
   SAVE ALL USERS
===================================================== */

function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalize(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


/* =====================================================
   FIND USER BY USERNAME OR EMAIL
===================================================== */

function findUser(identifier) {

    const users = getUsers();

    const searchValue =
        normalize(identifier);

    return users.find(
        user =>

            normalize(user.username)
            === searchValue

            ||

            normalize(user.email)
            === searchValue
    );

}


/* =====================================================
   REGISTER USER
===================================================== */

function registerUser(
    username,
    email,
    password
) {

    username =
        String(username || "").trim();

    email =
        String(email || "").trim();

    password =
        String(password || "").trim();


    /* Required fields */

    if (
        !username ||
        !email ||
        !password
    ) {

        return {
            success:false,
            message:"Please fill in all required fields."
        };

    }


    const users =
        getUsers();


    /* Duplicate username */

    const usernameExists =
        users.some(
            user =>

                normalize(user.username)
                ===
                normalize(username)
        );


    if (usernameExists) {

        return {
            success:false,
            message:
                "This username is already registered."
        };

    }


    /* Duplicate email */

    const emailExists =
        users.some(
            user =>

                normalize(user.email)
                ===
                normalize(email)
        );


    if (emailExists) {

        return {
            success:false,
            message:
                "This email is already registered."
        };

    }


    /* Create user object */

    const newUser = {

        id:
            Date.now(),

        username:
            username,

        email:
            email,

        password:
            password,

        registeredAt:
            new Date().toISOString()

    };


    /* Save */

    users.push(newUser);

    saveUsers(users);


    return {

        success:true,

        message:
            "Registration successful."

    };

}


/* =====================================================
   LOGIN USER
===================================================== */

function loginUser(
    identifier,
    password
) {

    identifier =
        String(identifier || "").trim();

    password =
        String(password || "").trim();


    /* Empty fields */

    if (
        !identifier ||
        !password
    ) {

        return {

            success:false,

            message:
                "Please enter your username/email and password."

        };

    }


    /* Find registered account */

    const user =
        findUser(identifier);


    if (!user) {

        return {

            success:false,

            message:
                "No registered account found."

        };

    }


    /* Password check */

    if (
        user.password !== password
    ) {

        return {

            success:false,

            message:
                "Incorrect password."

        };

    }


    /* =================================================
       LOGIN SUCCESS
    ================================================= */

    localStorage.setItem(

        CURRENT_USER_KEY,

        JSON.stringify({

            id:
                user.id,

            username:
                user.username,

            email:
                user.email

        })

    );


    /* Give one-time home access */

    localStorage.setItem(
        HOME_ACCESS_KEY,
        "1"
    );


    return {

        success:true,

        message:
            "Login successful.",

        user:user

    };

}


/* =====================================================
   LOGOUT USER
===================================================== */

function logoutUser() {

    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    localStorage.removeItem(
        HOME_ACCESS_KEY
    );

}


/* =====================================================
   CHECK LOGIN STATUS
===================================================== */

function getCurrentUser() {

    try {

        const user =
            JSON.parse(
                localStorage.getItem(
                    CURRENT_USER_KEY
                )
            );

        return user || null;

    }

    catch (error) {

        return null;

    }

}


/* =====================================================
   REGISTRATION FORM AUTO DETECTION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           REGISTRATION FORM
        ============================================= */

        const registrationForm =
            document.querySelector(
                "#registrationForm"
            );


        if (registrationForm) {

            registrationForm.addEventListener(

                "submit",

                function (event) {

                    event.preventDefault();


                    const usernameInput =
                        registrationForm.querySelector(
                            '[name="username"]'
                        );


                    const emailInput =
                        registrationForm.querySelector(
                            '[name="email"]'
                        );


                    const passwordInput =
                        registrationForm.querySelector(
                            '[name="password"]'
                        );


                    const username =
                        usernameInput
                        ? usernameInput.value
                        : "";


                    const email =
                        emailInput
                        ? emailInput.value
                        : "";


                    const password =
                        passwordInput
                        ? passwordInput.value
                        : "";


                    const result =
                        registerUser(

                            username,

                            email,

                            password

                        );


                    if (
                        !result.success
                    ) {

                        alert(
                            result.message
                        );

                        return;

                    }


                    alert(
                        "Registration successful! Please login."
                    );


                    /*
                       Registration complete.
                       Go to login page.
                    */

                    window.location.href =
                        "login.html";

                }

            );

        }


        /* =============================================
           LOGIN FORM
        ============================================= */

        const loginForm =
            document.querySelector(
                ".form"
            );


        if (loginForm) {

            loginForm.addEventListener(

                "submit",

                function (event) {

                    event.preventDefault();


                    const identifierInput =
                        loginForm.querySelector(
                            '[name="username"]'
                        );


                    const passwordInput =
                        loginForm.querySelector(
                            '[name="password"]'
                        );


                    const identifier =
                        identifierInput
                        ? identifierInput.value
                        : "";


                    const password =
                        passwordInput
                        ? passwordInput.value
                        : "";


                    const result =
                        loginUser(

                            identifier,

                            password

                        );


                    if (
                        !result.success
                    ) {

                        alert(
                            result.message
                        );

                        return;

                    }


                    alert(
                        "Login successful!"
                    );


                    /*
                       Login successful.
                       Go to homepage.
                    */

                    window.location.href =
                        "index.html";

                }

            );

        }

    }
);

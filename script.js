/* =====================================================
   MY WEBSITE - TEST VERSION
===================================================== */

const USERS_KEY = "mywebsite_registered_users";
const CURRENT_USER_KEY = "mywebsite_current_user";
const HOME_ACCESS_KEY = "portal_home_access_granted";

/* =====================================================
   SHA-256 PASSWORD HASH
===================================================== */

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    const hashArray = Array.from(
        new Uint8Array(hashBuffer)
    );

    return hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

/* =====================================================
   GET ALL USERS
===================================================== */

function getUsers() {
    try {
        const users = JSON.parse(
            localStorage.getItem(USERS_KEY)
        );

        return Array.isArray(users) ? users : [];

    } catch (error) {
        return [];
    }
}

/* =====================================================
   SAVE USERS
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
   FIND USER
===================================================== */

function findUser(identifier) {

    const users = getUsers();

    const searchValue = normalize(identifier);

    return users.find(
        user =>
            normalize(user.username) === searchValue ||
            normalize(user.email) === searchValue
    );
}

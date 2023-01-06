// unit/signup_validation.js

module.exports = {
    isEmail: (value) => {
        if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value)){
            return false;
        }
        return true;
    },

    isPhoneNumber: (value) => {
        if(!/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(value)){
            return false;
        }
        return true;
    },

    isPassword: (value) => {
        if(!/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/.test(value)){
            return false;
        }
        return true;
    }
};
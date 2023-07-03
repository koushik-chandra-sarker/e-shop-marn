export function login_validation(values){
    const errors = {};
    // validation for email
    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    else if(!values.password){
        errors.password = "Password Required";
    } else if(values.password.length < 4 || values.password.length > 20){
        errors.password = "Password must be greater then 4 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;

}
export function signup_validation(values) {
    const errors = {};
    // validation for name
    if (!values.name) {
        errors.name = 'FullName Required';
    }
    // validation for email
    else if(!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    else if(!values.password){
        errors.password = "Password Required";
    } else if(values.password.length < 4 || values.password.length > 20){
        errors.password = "Password must be greater then 4 and less then 20 characters long";
    } else if(values.password.includes(" ")){
        errors.password = "Invalid Password";
    }

    return errors;
}
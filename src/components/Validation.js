
export default function validate(values) {
    let errors = {};
    if(!values.firstname || values.firstname === undefined) {
        errors.firstname = 'it is a required field';
    }
    else{
        delete errors['firstname']
    }
    if(!values.lastname || values.lastname === undefined || !String(values.lastname).trim().length) {
        errors.lastname = 'it is a required field';
    }
    else{
        delete errors['lastname']
    }
    if(!values.dob || values.dob === undefined) {
        errors.dob = 'it is a required field';
    }
    else{
        delete errors['dob']
    }
    if(!values.email || values.email === undefined) {
        errors.email = 'it is a required field';
    }
    else{
        delete errors['email']
    }
    // else if(!/\S+@\S+\.\S+/.test(values.email)){
    //     errors.email = "invalid email address";
    // }
    if(!values.password || values.password === undefined) {
        errors.password = 'it is a required field';
    }
    else{
        delete errors['password']
    }
    if(!values.confirmpassword || values.confirmpassword === undefined) {
        errors.confirmpassword = 'it is a required field';
    }
    else{
        delete errors['confirmpassword']
    }
    debugger
    return errors;
};
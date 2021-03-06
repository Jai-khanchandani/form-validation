import { useEffect, useState } from 'react'

const useForm = (callback, validate) => {

    const [values, setValues] = useState('');
    const [errors, setErrors] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    }, [errors]);
    

    const handleSubmit = (e) => {
        
        if(values.password == values.confirmpassword){
            alert('success')
        } 
        else{
            callback();
        }
        e.preventDefault();
        console.log(validate(values));
        setErrors(validate(values));
        setIsSubmitting(true);
        
    };

    const handleChange = (e) => {
        let val = {
            [e.target.name]: e.target.value

        }
        
        console.log(val);
        
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };
  

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }

};

export default useForm;    

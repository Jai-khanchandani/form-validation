import React from 'react';
import useForm from "./useForm";
import validate from "./Validation"

const Form = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    

    function login() {
        console.log('no errors');
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>First Name:</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Enter First Name" 
                        name = "firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        
                    />     
                    {errors.firstname && (
                    <p>{errors.firstname}</p>
                    )}
                </div>
                
                <div>
                <label>Last Name:</label>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Enter Last Name"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange}
                        
                    />
                    {errors.lastname && (<p>{errors.lastname}</p>)}
                </div>
                <div>
                <label>DOB:</label>
                    <br />
                    <input 
                        type="date" 
                        placeholder="dd-mm-yyyy" 
                        name = "dob"
                        value={values.dob}
                        max="2012-03-01" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                <label>Email:</label>
                    <br />
                    <input 
                        type="email" 
                        placeholder="Enter Mail" 
                        name = "email"
                        value={values.email}
                        onChange={handleChange}
                        
                    />   
                    {errors.email && (<p>{errors.email}</p>)}  
                </div>
                
                <div>
                <label>Password:</label>
                    <br />
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={values.password}
                        name = "password"
                        onChange={handleChange}
                        
                    />     
                    {errors.password && (<p>{errors.password}</p>)}
                </div>
                <div>
                <label>Confirm Password:</label>
                    <br />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={values.confirmpassword}
                        name = "confirmpassword"
                        onChange={handleChange}
                        
                    />    
                    {errors.confirmpassword && (<p>{errors.confimpassword}</p>)} 
                </div>
                <br />
                
                <button type="submit">
                    Submit
                </button> 
            </div>
        </form>
    )
}

export default Form;





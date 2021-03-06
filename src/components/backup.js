import { React, useState} from 'react';


function Form() {
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if(password == confirmpassword) {
            alert('success');
        }
        else{
            alert('password do not match');
        }
    }

    
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>First Name:</label>
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter First Name" 
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                        required
                    />     
                   
                </div>
                
                <div>
                <label>Last Name:</label>
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter Last Name"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        required
                    />
                   
                </div>
                <div>
                <label>DOB:</label>
                    <br />
                    <input 
                        type="date" 
                        placeholder="dd-mm-yyyy" 
                        value={dob}
                        max="2012-03-01" 
                        onChange={e => setDob(e.target.value)}
                    />
                </div>
                <div>
                <label>Email:</label>
                    <br />
                    <input 
                        type="email" 
                        placeholder="Enter Mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />   
                   
                </div>
                
                <div>
                <label>Password:</label>
                    <br />
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />     
                    
                </div>
                <div>
                <label>Confirm Password:</label>
                    <br />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmpassword}
                        onChange={e => setConfirmpassword(e.target.value)}
                        required
                    />    
                     
                </div>
                <br />
                
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button> 
            </div>
        </form>
    )
}



   
export default Form;





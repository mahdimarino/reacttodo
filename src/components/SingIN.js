import React, { useEffect, useState } from 'react';
import './singin.css'; // Import the CSS file for styling
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import './singin.css'




const SignIn = () => {
    const navigate = useNavigate();
    const [user_name, setUser_name] = useState("");
    const [user_password, setUser_password] = useState("");
    const [userId, setUserId] = useState("");
    const [authenticated, setauthenticated] = useState(

        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/todolist-api/getusersapi.php')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error('An error occurred while fetching users:', error);
            });
    }, []);
    const handlesinginSubmit = (e) => {
        e.preventDefault();

        const account = users.find((user) => user.user_name === user_name);
        if (account && account.user_password === user_password) {
            const userId = account.user_id;
            localStorage.setItem("authenticated", true);
            navigate(`/TargetList/${userId}`);
        }
    };



    return (
        <div className="signin-container ">
            <h1 style={{ color: 'white' }} className='m-4'>Log In</h1><p style={{ color: 'white' }}>Sign in to your own Target List</p>
            <Col className='mx-auto' xs={12} xl={6} >

                <form className='formsize' onSubmit={handlesinginSubmit}>

                    <div class="form-floating mb-3 formsize ">
                        <input onChange={(e) => { setUser_name(e.target.value) }} style={{ borderRadius: '30px' }} value={user_name} type="text" className="form-control" id="floatingInput" placeholder="Full Name" name='user_name' />
                        <label for="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-5  ">

                        <input onChange={(e) => { setUser_password(e.target.value) }} style={{ borderRadius: '30px' }} type="password" className="form-control" id="floatingInput" placeholder="Full Name" name="user_password" />
                        <label for="floatingInput">Password</label>
                    </div>

                    <div class="form-floating m-auto button w-50">
                        <button style={{ backgroundColor: 'white', color: 'black' }} type='submit' className="btn hoverd button containerdingin  ml-auto mt-4">Login</button>
                    </div>
                </form>
            </Col>
            <p className='mt-5 ' style={{ color: 'white' }}>You dont have an account {' '}<NavLink to='/' ActiveClassName='a'><b>Sign Up</b></NavLink></p>
        </div>
    );
}

export default SignIn;


import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import './singup.css'

import { NavLink, useNavigate } from "react-router-dom";



const SingUp = () => {
    const navigate = useNavigate();
    const [user_name, setUser_name] = useState('')
    const [user_email, setUser_email] = useState('')
    const [user_password, setUser_password] = useState('')

    const handleSingUp = (e) => {
        e.preventDefault()
        if (user_name.length === 0 && user_email.length === 0 && user_password.length === 0) {
            return
        }
        const userData = {
            user_name: user_name,
            user_email: user_email,
            user_password: user_password

        }
        axios.post('http://localhost/todolist-api/insertdata.php', userData)
            .then(res => {
                console.log(res.data)
                navigate("/SingIn");

            })
            .catch(error => {
                console.error('An error occurred while making the request:', error);
            });
    }
    return (
        <div>
            <h1 style={{ color: 'white' }} className='m-4'>Welcome To Target Pointer</h1><p style={{ color: 'white' }}>Sing Up and get a free account</p>
            <Col className='mx-auto' xs={12} xl={6} >

                <form onSubmit={handleSingUp} >
                    <div class="form-floating mb-3">
                        <input onChange={(e) => { setUser_name(e.target.value) }} style={{ borderRadius: '30px' }} type="text" className="form-control" id="floatingInput" placeholder="Full Name" name='user_name' />
                        <label for="floatingInput">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input onChange={(e) => { setUser_email(e.target.value) }} style={{ borderRadius: '30px' }} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='user_email' />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input onChange={(e) => { setUser_password(e.target.value) }} style={{ borderRadius: '30px' }} type="password" className="form-control" id="floatingPassword" placeholder="Password" name='user_password' />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating m-auto button w-50">
                        <button style={{ backgroundColor: 'white', color: 'black' }} type='submit' className="btn hoverd button  ml-auto mt-4">Sing Up</button>
                    </div>
                </form>


            </Col>
            <p className='mt-3' style={{ color: 'white' }}>Already have an account {' '}<NavLink to='/SingIN' ActiveClassName='a'><b>Login</b></NavLink></p>
        </div>
    )
}

export default SingUp
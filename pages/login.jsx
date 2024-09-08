import { Link, useNavigate } from "react-router-dom"
import React from "react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase.js";
import Headerloginsignup from "./headerloginsignup.jsx";
function Login() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [loading, setloading] = useState(false)

    async function SubmitBtn() {
        try {
            setloading(true)
            await signInWithEmailAndPassword(auth, Email, Password)
            console.log("Done");
            setloading(false)
            navigate('/dashboard')
        } catch (error) {
            console.log("wrong");

        }
    }

    return (
        <>
            <Headerloginsignup />
            <section className="loginpage">
                <div className="image">
                    <img width="280%" src="#" alt="" />
                </div>
                <div className="form">
                    <div className="image1">
                        <h1>Log IN</h1>
                        <div className="form1">
                            <form id="login" action="">
                                <div className="inputField">
                                    <div>
                                        <label>Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} className="inputBorder  p-1 px-auto" type="text" placeholder="Enter Your Email" name="" />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} className="inputBorder" type="password" placeholder="Enter Your Password" name="" />
                                    </div>
                                </div>
                                <Button onClick={SubmitBtn} isLoading={loading} className='mt-2' color="primary">
                                    Button
                                </Button>
                            </form>
                        </div>
                        <div className="LinksPages">
                            <p className="loginmargin">Don't Have an account? </p>
                            <Link to={`/signup`}>Sign-Up</Link>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Login
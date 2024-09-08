import { Link, useNavigate } from "react-router-dom"
import { auth, createUserWithEmailAndPassword } from "../firebase/firebase.js"
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Headerloginsignup from "./headerloginsignup.jsx";
function Signup() {
    const [Email, setEmail] = useState('')
    const navigate = useNavigate();
    const [Password, setPassword] = useState('')
    const [loading, setloading] = useState(false)

    async function SubmitBtn() {
        try {
            console.log(Email, Password);
            setloading(true)
            await createUserWithEmailAndPassword(auth, Email, Password)
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
                        <h1>Sign Up</h1>
                        <div className="form1">
                            <form id="login" action="">
                                <div className="inputField">
                                    <div>
                                        <label>Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} className="pl-10 inputBorder" type="text" name="" placeholder="Create a Email" />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input onChange={(e) => setPassword(e.target.value)} className="inputBorder" type="password" name="" placeholder="Create a password" />
                                    </div>
                                </div>

                                <Button onClick={SubmitBtn} isLoading={loading} className='mt-2' color="primary">
                                    Sign Up
                                </Button>

                            </form>
                        </div>
                        <div className="LinksPages">
                            <p className="loginmargin">Already Have an Account?</p>
                            <Link to={`/login`}>Log-In</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Signup
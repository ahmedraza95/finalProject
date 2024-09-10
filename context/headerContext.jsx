import { createContext, useEffect,useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const createuserContext = createContext();


function UserContexprovider({ children }) {
    const [User, setUser] = useState({
        isLogin: false,
        userInfo: {},
    })
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user=>", user);
                setUser({
                    isLogin: true,
                    userInfo: {
                        email: user.email,
                        photoUrl: user.photoURL,
                        name: user.displayName,
                    },
                });
                console.log("User is logged In");
            } else {
                setUser({
                    isLogin: false,
                    userInfo: {},
                });
                console.log("User is not logged In");
            }
            setLoading(false);
        });
        
        
        return subscribe;
    }, [])
    console.log(User);
    return (
        <createuserContext.Provider value={{ User, setUser }}>
            {loading ? "Loading........." : children}
        </createuserContext.Provider>
    );
}
export default UserContexprovider
import { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const VERIFY_JWT_API = "/verifyjwt"
const AuthContext = createContext({});

interface Props {
    children: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    // const[userId, setUserId] = useState(null);
    // const[userRole, setUserRole] = useState(null);
    // const[userEmail, setUserEmail] = useState(null);
    const[jwt, setJwt] = useState('');

    useEffect(()=>{
        console.log('App Started');
        const tokenLocal = localStorage.getItem('token');
        if(tokenLocal) {
        const verifyToken = async () => {
            try{
                const response = await axios.get(VERIFY_JWT_API, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${tokenLocal}`,
                    }
                });
                console.log(response);
                if(response.status === 200){
                    setJwt(tokenLocal);
                    setIsAuthenticated(true);
                    setUsername(response.data);
                    setJwt(tokenLocal);
                } else setIsAuthenticated(false);
            }catch(err){
                console.log(err);
            }
        }
        verifyToken();
    }
    })

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, username, setUsername, jwt, setJwt}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { GoogleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result?.user);
                const userInfo = {
                    email: result?.user?.email,
                    name: result?.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
        //     .catch(err) {
        //     console.log(err.message);
        // }
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn">
                <FcGoogle className="mr-2" /> Login With Google
            </button>
        </div>
    );
};

export default GoogleLogin;
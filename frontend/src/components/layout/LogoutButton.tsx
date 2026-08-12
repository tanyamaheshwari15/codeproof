import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async ( ) => {
        try {
            await api.post("/auth/logout")
            navigate("/login");
        }
        catch (error) {
            console.error("Error during logout:", error);
        }
    }

    return (
        <button onClick={handleLogout} className="ml-5 text-red-500 hover:text-red-700">
            <i className="bi-box-arrow-right mr-3"></i> Logout
        </button>
    );
}
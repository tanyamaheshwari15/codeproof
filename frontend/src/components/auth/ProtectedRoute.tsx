import api from "../../services/api";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await api.get("/auth/user");
                setAuthenticated(true);
            } catch (error) {
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return authenticated ? <Outlet /> : <Navigate to="/login" />;
};
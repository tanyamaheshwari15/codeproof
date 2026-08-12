import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64">
                <Header />
                <Outlet />
            </main>
        </div>
    );
}
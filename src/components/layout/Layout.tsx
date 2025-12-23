import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

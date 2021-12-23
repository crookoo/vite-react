import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main className="container pt-5 my-4 flex-shrink-0">
            <Outlet />
        </main>
    )
}
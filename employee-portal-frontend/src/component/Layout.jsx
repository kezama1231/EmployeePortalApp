import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {

    const startContent = <div className="app-title">Employee Portal</div>
    
    const endContent = (
        <div className="nav-actions">
            <Link to="/" className="nav-link">
                <Button label={"Employees"} text />
            </Link>
            <Link to="/employees/create" className="nav-link">
                <Button label={"Create Employee"} outlined />
            </Link>
        </div>
    );

    return (
        <div>
            <Menubar start={startContent} end={endContent} />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
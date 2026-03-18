import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    const startContent = (
        <div className="brand-block">
            <span className="brand-badge">EP</span>
            <div>
                <div className="app-title">Employee Portal</div>
                <div className="app-subtitle">Professional employee management</div>
            </div>
        </div>
    );

    const endContent = (
        <div className="nav-actions">
            <Link to="/" className="nav-link">
                <Button label={"Employees"} icon="pi pi-users" text />
            </Link>
            <Link to="/employees/create" className="nav-link">
                <Button label={"Create Employee"} icon="pi pi-plus" outlined />
            </Link>
        </div>
    );

    return (
        <div className="app-shell">
            <div className="page-container">
                <Menubar start={startContent} end={endContent} className="portal-menubar" />
                <div className="content-stack">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

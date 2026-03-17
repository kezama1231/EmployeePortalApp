import { Card } from "primereact/card";
import DepartmentFilter from "../component/DepartmentFilter";
import { useEffect, useState } from "react";
import { Message } from 'primereact/message';
import { ProgressSpinner } from "primereact/progressspinner";
import { EmployeeService } from "../api/employeeApi";
import EmployeeTable from "../component/EmployeeTable";

export default function EmployeeListPage() {

    const [department, setDepartment] = useState("HR");
    const [employees, setEmployees] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError("");
            try {
                const data = await EmployeeService.getEmployeesByDepartment(department);
                setEmployees(data);
            } catch (err) {
                console.log(err);
                setEmployees([]);
                setError("Err....We ran into some trouble fetching data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [department])

    const handleDepartmentChange = async (dept) => {
        setDepartment(dept);
    }

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Last Chance!!! Are you sure to delete ?");
        if(!confirmed){
            return
        }
        try{
            setError('');
            await EmployeeService.deleteEmployee(id);
            const data = await EmployeeService.getEmployeesByDepartment(department);
            setEmployees(data);
        } catch (err) {
            setError('Failed to delete employee.');
          }
    }

    return (
        <Card title="Employee List">
            <DepartmentFilter
                department={department}
                onDepartmentChange={handleDepartmentChange}
            />

            {!department && !loading && (
                <p className="muted-text">Choose a department to view employees.</p>
            )}

            {loading && (
                <div className="centered-block">
                    <ProgressSpinner />
                </div>
            )}

            {error && (
                <div className="message-block">
                    <Message severity="error" text={error} />
                </div>
            )}

            {!loading && !error && department && (
                <EmployeeTable employees={employees} onDelete={handleDelete} />
            )}
        </Card>
    )
}

import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import { useEffect, useState } from "react";
import { EmployeeService } from "../api/employeeApi";
import { Message } from "primereact/message";
import { ProgressSpinner } from "primereact/progressspinner";
import { Card } from "primereact/card";


export default function EditEmployeePage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await EmployeeService.getEmployeeById(id);
                setInitialData({
                    name: data.name,
                    contactNumber: data.contactNumber,
                    department: data.department,
                    email: data.email,
                    jobTitle: data.jobTitle,
                });
            } catch (err) {
                setError('Failed to load employee.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdateEmployee = async (formData) => {
        await EmployeeService.updateEmployee(id, formData);
        navigate(`/`);
    }

    if (loading) {
        return (
            <div className="centered-block">
                <ProgressSpinner />
            </div>
        );
    }

    if (error) {
        return <Message severity="error" text={error} />
    }


    return (
        <Card title="Edit Employee" className="page-card">
            <EmployeeForm
                initialValues={initialData}
                onSubmit={handleUpdateEmployee}
                submitLabel="Update Employee"
            />
        </Card>
    );
}

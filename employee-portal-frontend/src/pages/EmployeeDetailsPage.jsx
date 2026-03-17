import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { ProgressSpinner } from 'primereact/progressspinner';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { EmployeeService } from "../api/employeeApi";

export default function EmployeeDetailsPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('')
                const data = await EmployeeService.getEmployeeById(id);
                setEmployee(data);
            } catch (err) {
                console.log(err);
                setError('Employee not found.');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id])

    const handleDelete = () => {
        confirmDialog({
            message: "Before that!! Are you sure to delete ?",
            header: "Delete Employee",
            icon: "pi pi-exclamation-triangle",
            acceptClassName: "p-button-danger",
            accept: async () => {
                try {
                    await EmployeeService.deleteEmployee(id);
                    navigate("/");
                } catch (err) {
                    setError('Failed to delete employee.');
                }
            },
        });
    }

    if (loading) {
        return (
            <div className="centered-block">
                <ProgressSpinner />
            </div>

        )
    }

    if (error) {
        return (
            <Message severity="error" text={error} />
        )
    }

    return (
        <Card title={"Employee Details"}>
            <ConfirmDialog />
            <div className="detail-grid">
                <div><strong>ID:</strong> {employee.employeeId}</div>
                <div><strong>Name:</strong> {employee.name}</div>
                <div><strong>Contact Number:</strong> {employee.contactNumber}</div>
                <div><strong>Email:</strong> {employee.email}</div>
                <div><strong>Job Title:</strong> {employee.jobTitle}</div>
                <div><strong>Department:</strong> {employee.department}</div>
                <div><strong>Created At:</strong> {employee.createdAt}</div>
                <div><strong>Modified At:</strong> {employee.modifiedAt}</div>
                <div><strong>Created By:</strong> {employee.createdBy}</div>
                <div><strong>Modified By:</strong> {employee.modifiedBy}</div>
            </div>
            <div className="page-actions">
                <Link to="/">
                    <Button label="Back" outlined />
                </Link>
                <Link to={`/employees/${employee.employeeId}/edit`}>
                    <Button label="Edit" />
                </Link>
                <Button label="Delete" severity="danger" onClick={handleDelete} />
            </div>
        </Card>
    )
}

import { useNavigate } from "react-router-dom";
import EmployeeForm from "../component/EmployeeForm";
import { Card } from "primereact/card";
import { EmployeeService } from "../api/employeeApi";


export default function CreateEmployeePage() {

    const navigate = useNavigate();

    const handleCreateEmployee = async (formData) => {
        await EmployeeService.createEmployee(formData);
        navigate('/');
    };

    return (
        <Card label="Create Employee">
            <EmployeeForm
                onSubmit={handleCreateEmployee}
                submitLabel="Create Employee"
            />
        </Card>
    )
}
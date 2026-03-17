import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function EmployeeTable({ employees, onDelete }) {
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="table-actions">
                <Link to={`/employees/${rowData.employeeId}`}>
                    <Button label={"View"} size="small" outlined />
                </Link>
                <Link to={`/employees/${rowData.employeeId}/edit`}>
                    <Button label={"Edit"} size="small" />
                </Link>
                <Button
                    label="Delete"
                    size="small"
                    severity="danger"
                    onClick={() => onDelete(rowData.employeeId)}
                />
            </div>

        )
    }

    return (
        <DataTable
            value={employees || []}
            stripedRows
            rows={15}
            paginator
            emptyMessage={"No employees  found for this department."}
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column field="employeeId" header="ID" />
            <Column field="name" header="Name" sortable />
            <Column field="contactNumber" header="Contact Number" />
            <Column field="email" header="Email" />
            <Column field="jobTitle" header="Job Title" />
            <Column field="department" header="Department" />
            <Column header="Actions" body={actionBodyTemplate} />
        </DataTable>
    )
}

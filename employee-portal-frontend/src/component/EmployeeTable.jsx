import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function EmployeeTable({ employees, onDelete }) {
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="table-actions table-actions-compact">
                <Link to={`/employees/${rowData.employeeId}`}>
                    <Button
                        label={"View"}
                        icon="pi pi-eye"
                        size="small"
                        outlined
                        className="action-btn action-btn-view"
                    />
                </Link>
                <Link to={`/employees/${rowData.employeeId}/edit`}>
                    <Button
                        label={"Edit"}
                        icon="pi pi-pencil"
                        size="small"
                        className="action-btn action-btn-edit"
                    />
                </Link>
                <Button
                    label="Delete"
                    icon="pi pi-trash"
                    size="small"
                    severity="danger"
                    className="action-btn action-btn-delete"
                    onClick={() => onDelete(rowData.employeeId)}
                />
            </div>

        )
    }

    return (
        <DataTable
            className="employee-table"
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
    );
}

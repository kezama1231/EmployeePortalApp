import { Dropdown } from 'primereact/dropdown';

const departmentOptions = [
    { label: 'HR', value: 'HR' },
    { label: 'IT', value: 'IT' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Operations', value: 'Operations' },
]

export default function DepartmentFilter({ department, onDepartmentChange }) {
    return (
        <div className="filter-row">
            <label htmlFor="departmentFilter" className="field-label">Department</label>
            <Dropdown
                inputId="departmentFilter"
                value={department}
                onChange={(e) => onDepartmentChange(e.value)}
                options={departmentOptions}
                optionLabel="label"
                optionValue="value"
                placeholder="Select department"
                className="filter-dropdown"
            />
        </div>
    );
}

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
            <label>Department</label>
            <Dropdown 
                value={department}
                onChange={(e) => onDepartmentChange(e.value)} 
                options={departmentOptions} 
                optionLabel="label"
                optionValue="value"
                placeholder="Select Dept." 
                className="" 
            />
        </div>
    )
}
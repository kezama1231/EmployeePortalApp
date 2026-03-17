import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { useState, useEffect } from "react";
import { Button } from 'primereact/button';

const departmentOptions = [
    { label: 'HR', value: 'HR' },
    { label: 'IT', value: 'IT' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Operations', value: 'Operations' },
];

const defaultFormValues = {
    name: '',
    contactNumber: '',
    department: '',
    email: '',
    jobTitle: '',
};

export default function EmployeeForm({ initialValues = defaultFormValues, onSubmit, submitLabel }) {

    const [formData, setFormData] = useState(defaultFormValues);
    const [error, setError] = useState('');

    useEffect(() => {
        setFormData(initialValues || defaultFormValues);
    }, [initialValues])

    const handleChange = (field, value) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await onSubmit(formData);
        } catch (err) {
            console.log(err);
            setError('Failed to submit employee form.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            {error && <Message severity="error" text={error} />}

            <div className="field-block">
                <label htmlFor="name">Name</label>
                <InputText
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                />
            </div>

            <div className="field-block">
                <label htmlFor="contactNumber">Contact Number</label>
                <InputText
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={(e) => handleChange("contactNumber", e.target.value)}
                    required
                />
            </div>

            <div className="field-block">
                <label htmlFor="department">Department</label>
                <Dropdown
                    inputId="department"
                    value={formData.department}
                    onChange={(e) => handleChange("department", e.target.value)}
                    options={departmentOptions}
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Select Department"
                />
            </div>

            <div className="field-block">
                <label htmlFor="email">Email</label>
                <InputText
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                />
            </div>

            <div className="field-block">
                <label htmlFor="jobTitle">Job Title</label>
                <InputText
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleChange('jobTitle', e.target.value)}
                    required
                />
            </div>

            <div className="page-actions">
                <Button type="submit" label={submitLabel} />
            </div>

        </form>
    )
}
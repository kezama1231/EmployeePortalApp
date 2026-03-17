import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/employees',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const EmployeeService = {
    getEmployeesByDepartment: async (department) => {
        const response = await api.get(
            '', { params: {department}}
        );
        return response.data;
    },
    getEmployeeById: async (id) => {
        const response = await api.get(`/${id}`);
        return response.data;
    },
    createEmployee: async (employeeData) => {
        const response = await api.post('', employeeData);
        return response.data;
    },
    updateEmployee: async (id, employeeData) => {
        const response = await api.put(`/${id}`, employeeData);
        return response.data;
    },
    deleteEmployee: async (id) => {
        await api.delete(`/${id}`);
    }
}
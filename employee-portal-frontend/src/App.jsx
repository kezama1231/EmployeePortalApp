import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import './App.css';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import EditEmployeePage from './pages/EditEmployeePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmployeeListPage/>} />
        <Route path="employees/create" element={<CreateEmployeePage/>} />
        <Route path="employees/:id" element={<EmployeeDetailsPage />} />
        <Route path="employees/:id/edit" element={<EditEmployeePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App

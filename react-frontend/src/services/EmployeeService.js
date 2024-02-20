import axios from 'axios';

// Define the base URL for your API
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

// Function to retrieve the token from local storage
const getToken = () => {
    return localStorage.getItem('USER_KEY'); // Ensure this key matches what you use when storing the token
};

// Create an Axios instance configured with your base URL and headers
const axiosInstance = axios.create({
    baseURL: EMPLOYEE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // Include the Authorization header in every request made by this instance
        'Authorization': `Bearer ${getToken()}`,
    }
});

// Update the instance when needed (for example, if the token changes)
axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

class EmployeeService {
    getEmployees() {
        return axiosInstance.get('/');
    }

    createEmployee(employee) {
        return axiosInstance.post('/', employee);
    }

    getEmployeeById(employeeId) {
        return axiosInstance.get(`/${employeeId}`);
    }

    updateEmployee(employee, employeeId) {
        return axiosInstance.put(`/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axiosInstance.delete(`/${employeeId}`);
    }
}

export default new EmployeeService();

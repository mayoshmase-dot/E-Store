import * as yup from 'yup';

export const registerSchema = yup.object({
    userName: yup.string().required("User Name is required").min(3, "userName must be at least 6 characters").matches(/^[a-zA-Z0-9_-]{3,20}$/, "User Name must be 3-50 letters and spaces only"),
    fullName: yup.string().required("Full Name is required").min(3, "fullName must be at least 6 characters").matches(/^[a-zA-Z\s]{3,50}$/, "Full Name must be 3-50 letters and spaces only"),
    email: yup.string().required("Email is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must be valid"),
    password: yup.string("Password is required").required().min(6, "password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must be 8-20 characters, include uppercase, lowercase, number and special character"),
    phoneNumber: yup.string().required("Phone Number is required").matches(/^\d{9,15}$/, "Phone Number must be 9-15 digits")
});
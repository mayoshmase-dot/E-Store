import * as yup from 'yup';

export const LoginSchema = yup.object({
    email: yup.string().required("Email is required").email("Email must be valid"),

    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            "Password must include uppercase, lowercase, number and special character"),
});

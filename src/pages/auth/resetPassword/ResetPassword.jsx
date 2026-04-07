import { Box, Button, Container, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import useResetPassword from "../../../hooks/useResetPassword";

export default function ResetPassword() {
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { mutate: resetPassword, isPending } = useResetPassword()

    const handleReset = () => {
        if (!newPassword || !confirmPassword) {
            toast.error('Please fill all fields')
            return
        }
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match')
            return
        }
        resetPassword({ email, code, newPassword })
    }

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                <Box sx={{ p: 5, borderRadius: 4, width: '100%' }}>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={4}>
                        <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 2, display: 'flex' }}>
                            <LockOutlinedIcon sx={{ color: 'white', fontSize: 40 }} />
                        </Box>
                        <Typography variant="h5" fontWeight="bold">Reset Password</Typography>
                        <Typography variant="body2" color="secondary.dark" textAlign="center">
                            Enter your new password below.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={3}>
                        <TextField
                            fullWidth label="Email" variant="outlined" type="email"
                            value={email}
                            disabled
                        />
                        <TextField
                            fullWidth label="Verification Code" variant="outlined"
                            value={code}
                            disabled
                        />
                        <TextField
                            fullWidth label="New Password" variant="outlined" type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth label="Confirm Password" variant="outlined" type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button variant="contained" sx={{ py: 2, borderRadius: 2 }}
                            disabled={isPending}
                            onClick={handleReset}>
                            Reset Password
                        </Button>
                        <Button variant="text" sx={{ color: 'secondary.dark' }}
                            onClick={() => navigate('/login')}>
                            Back to Login
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
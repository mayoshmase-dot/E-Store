import { Box, Button, Container, TextField, Typography, Alert } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyCode() {
    const navigate = useNavigate()
    const [code, setCode] = useState('')

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                <Box sx={{ p: 5, borderRadius: 4, width: '100%' }}>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={4}>
                        <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 2, display: 'flex' }}>
                            <LockOutlinedIcon sx={{ color: 'white', fontSize: 40 }} />
                        </Box>
                        <Typography variant="h5" fontWeight="bold">Enter Verification Code</Typography>
                        <Typography variant="body2" color="secondary.dark" textAlign="center">
                            We sent a code to your email address. Please enter it below.
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={3}>
                        <TextField type="number"
                            fullWidth label="Verification Code" variant="outlined" value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Button variant="contained" sx={{ py: 2, borderRadius: 2 }}
                            onClick={() => navigate('/resetPassword', { state: { code } })}>
                            Verify Code
                        </Button>
                        <Button variant="text" sx={{ color: 'secondary.dark' }}
                            onClick={() => navigate('/forgotPassword')}>
                            Resend Code
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
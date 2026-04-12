import { Box, Button, Container, TextField, Typography, Alert } from "@mui/material";
import LockResetIcon from '@mui/icons-material/LockReset';
import useForgotPassword from "../../../hooks/useForgotPassword";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const [email, setEmail] = useState('')
    const { mutate: sendCode, isPending } = useForgotPassword()

    return (
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" pt={5}>
                <Box sx={{ p: 5, borderRadius: 4, width: '100%' }}>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={4}>
                        <Box sx={{ bgcolor: 'primary.main', borderRadius: '50%', p: 2, display: 'flex' }}>
                            <LockResetIcon sx={{ color: 'white', fontSize: 40 }} />
                        </Box>
                        <Typography variant="h5" fontWeight="bold">{t("Forgot Password?")}</Typography>
                        <Typography variant="body2" color="secondary.dark" textAlign="center">
                            {t("Enter your email address and we'll send you a link to reset your password.")}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={3}>
                        <TextField fullWidth label={t("Email")} variant="outlined" type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button variant="contained" sx={{ py: 2, borderRadius: 2 }} disabled={isPending} onClick={() => sendCode(email)}>
                            {t("Send Reset Link")}
                        </Button>
                        <Button variant="text" sx={{ color: 'secondary.dark' }} onClick={() => navigate('/login')}>
                            {t("Back to Login")}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
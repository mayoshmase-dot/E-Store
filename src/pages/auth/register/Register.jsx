import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link, TextField, Typography, Checkbox, CircularProgress } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';
import { useState } from 'react';
import axiosInstance from '../../../api/axiosInstance';
import { useTranslation } from 'react-i18next';

export default function Register() {
  const { t } = useTranslation()
  const [serverErrors, setServerErrors] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(registerSchema) });
  const registerForm = async (values) => {
    try {
      const response = await axiosInstance.post('/auth/Account/Register', values);
      console.log("response", response);
    }
    catch (error) {
      setServerErrors([error.response.data.errors])
    }
  }
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} py={5}>
      <Box component={'section'} display={'flex'} flexDirection={'column'} bgcolor={'rgba(205, 207, 207, 0.34)'}
        mx={'auto'} p={3} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)'} borderRadius={5}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography component={'h1'} variant='p'>{t("Sign Up")}</Typography>
          <Typography component={'h3'} variant='body2' color='#6C7275'>{t("Already have an account ? ")}
            <Link component={ReactLink} to={'/login'} underline='none' color='black' fontWeight={'bold'}> {t("Sign In")}</Link>
          </Typography>
        </Box>
        {serverErrors?.length > 0 && (
          <Box mt={2}>
            {serverErrors.map((error) => (
              <Typography color='red'>
                {error}
              </Typography>
            ))}
          </Box>
        )}

        <Box component={'form'} display={'flex'} flexDirection={'column'} gap={3} mt={2}
          onSubmit={handleSubmit(registerForm)} >
          <TextField {...register('userName')} fullWidth label={t("User Name")} variant="standard"
            error={errors.userName} helperText={errors.userName?.message} />
          <TextField {...register('fullName')} fullWidth label={t("Full Name")} variant="standard"
            error={errors.fullName} helperText={errors.fullName?.message} />
          <TextField {...register('email')} fullWidth label={t("Email")} variant="standard"
            error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label={t("Password")} variant="standard"
            error={errors.password} helperText={errors.password?.message} />
          <TextField {...register('phoneNumber')} fullWidth label={t("Phone Number")} variant="standard"
            error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />

          <Box display={'flex'} alignItems={'center'}>
            <Checkbox />
            <Typography color='#6C7275'>{t("I agree with")} {' '}
              <Box component={'span'} color='black' fontWeight={'bold'}>
                {t("Privacy Policy")}
              </Box>
              {' '} {t("and")} {' '}
              <Box component={'span'} color='black' fontWeight={'bold'}>
                {t("Terms of Use")}
              </Box>
            </Typography>
          </Box>
          <Button type='submit' variant="contained" sx={{ backgroundColor: 'black', borderRadius: 5 }} disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : t("Sign Up") }</Button>

        </Box>
      </Box ></Box>
  )
}

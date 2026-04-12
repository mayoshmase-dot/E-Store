import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography, Link, Checkbox, Grid } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../validation/LoginSchema';
import axiosInstance from '../../../api/axiosInstance';
import useAuthStore from '../../../store/useAuthStore';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation()
  const setToken = useAuthStore((state) => state.setToken)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });
  const LoginForm = async (values) => {
    try {
      const response = await axiosInstance.post('/auth/Account/Login', values);
      if (response.status == 200) {
        setToken(response.data.accessToken);
        navigate('/');
      }
      console.log("response", response);
    }
    catch (error) {
      console.log("Registration Error:", error.message)
    }
  }
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} py={5}>
      <Box component={'section'} display={'flex'} flexDirection={'column'} bgcolor={'rgba(205, 207, 207, 0.34)'}
        pt={5} p={6} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)'} borderRadius={5}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography component={'h1'} variant='p'>{t("Sign In")}</Typography>
          <Typography component={'h6'} variant='body2' color='#6C7275' >{t("Don’t have an accout yet ? ")}<Link component={RouterLink} to={'/register'}
            underline='none' fontWeight={'bold'} sx={{ color: 'black' }}> {t("Sign Up")}</Link></Typography>
        </Box>
        <Box component={'form'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3} mt={2}
          onSubmit={handleSubmit(LoginForm)} >
          <TextField  {...register('email')} fullWidth label={t("Email")} variant="standard"
            error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label={t("Password")} variant="standard"
            error={errors.password} helperText={errors.password?.message} />


          <Grid container justifyContent={'space-between'} gap={1} alignItems={'center'} color={'9CA3AF'} fontWeight={'bold'}>
            <Grid item size={{ xs: '{ 12}', sm: '{ 6}', md: '{4}', lg: '{3}' }}>
              <Checkbox />{t("Remember me")}
            </Grid>
            <Grid item size={{ xs: '{ 12}', sm: '{ 6}', md: '{4}', lg: '{3}' }}>
              <Typography sx={{ cursor: 'pointer' }} variant={'p'} onClick={() => navigate('/forgotPassword')}>
                {t("Forgot Password?")}
              </Typography>
            </Grid>
          </Grid>
          <Button type='submit' variant="contained" sx={{ backgroundColor: 'black', borderRadius: 5 }}>{t("Sign In")}</Button>

        </Box>
      </Box ></Box >
  )
}


import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography, Link, Checkbox, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../validation/LoginSchema';
import axiosInstance from '../../../api/axiosInstance';

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });
  const LoginForm = async (values) => {
    try {
      const response = await axiosInstance.post('/auth/Account/Login', values);
      if (response.status == 200) {
        localStorage.setItem("accessToken", response.data.accessToken)
      }
      console.log("response", response);
    }
    catch (error) {
      console.log("Registration Error:", error.message)
    }
  }
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box component={'section'} my={5} display={'flex'} flexDirection={'column'} bgcolor={'rgba(205, 207, 207, 0.34)'}
        mt={5} p={6} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)'} borderRadius={5}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography component={'h1'} variant='p'>Login</Typography>
          <Typography component={'h6'} variant='body2' color='#6C7275' >Don’t have an accout yet ?<Link component={RouterLink} to={'/register'}
            underline='none' fontWeight={'bold'} sx={{ color: 'black' }}> Register</Link></Typography>
        </Box>
        <Box component={'form'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3} mt={2}
          onSubmit={handleSubmit(LoginForm)} >
          <TextField  {...register('email')} fullWidth label="Email" variant="standard"
            error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label="Password" variant="standard"
            error={errors.password} helperText={errors.password?.message} />


          <Grid container justifyContent={'space-between'} gap={1} alignItems={'center'} color={'9CA3AF'} fontWeight={'bold'}>
            <Grid item size={{ xs: '{ 12}', sm: '{ 6}', md: '{4}', lg: '{3}' }}>
              <Checkbox />Remember me
            </Grid>
            <Grid item size={{ xs: '{ 12}', sm: '{ 6}', md: '{4}', lg: '{3}' }}>
              Forgot password?
            </Grid>
          </Grid>
          <Button type='submit' variant="contained" sx={{ backgroundColor: 'black', borderRadius: 5 }}>Login</Button>

        </Box>
      </Box ></Box >
  )
}


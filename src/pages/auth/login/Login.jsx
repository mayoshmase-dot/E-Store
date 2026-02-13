import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField, Typography, Link, Checkbox } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../validation/LoginSchema';
import { CheckBox } from '@mui/icons-material';

export default function Login() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });
  const LoginForm = async (values) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', values);
      console.log("response", response);
    }
    catch (error) {
      console.log("Registration Error:", error.message)
    }
  }
  return (

    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
      <Box component={'section'} my={5} display={'flex'} flexDirection={'column'}
        p={3} mt={10} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)'} borderRadius={5}>
        <Box display={'flex'} flexDirection={'column'} gap={2}>
          <Typography component={'h1'} variant='p'>Login</Typography>
          <Typography component={'h6'} variant='body2' color='#6C7275' >Don’t have an accout yet ?<Link component={RouterLink} to={'/register'} underline='none' fontWeight={'bold'} sx={{ color: 'black' }}> Register</Link></Typography>
        </Box>
        <Box component={'form'} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3} mt={2}
          onSubmit={handleSubmit(LoginForm)} >
          <TextField  {...register('email')} fullWidth label="Email" variant="standard"
            error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label="Password" variant="standard"
            error={errors.password} helperText={errors.password?.message} />

          <Box display="flex" gap={1} alignItems="center" width="100%">
            <Checkbox />
            <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
              Remember me
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              Forgot password?
            </Typography>
          </Box>
          <Button type='submit' variant="contained" sx={{ backgroundColor: 'black' , borderRadius:5 }}>Submit</Button>

        </Box>
      </Box></Box>
  )
}


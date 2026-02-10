import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link, TextField, Typography, Checkbox } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../validation/RegisterSchema';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });
  const registerForm = async (values) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', values);
      console.log("response", response);
    }
    catch (error) {
      console.log("Registration Error:", error.message)
    }
  }
  return (
    <Box component={'section'} my={4} display={'flex'} flexDirection={'column'}
      mx={'auto'} p={3} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)'} borderRadius={5}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Typography component={'h1'} variant='p'>Register</Typography>
        <Typography component={'h3'} variant='body2' color='#6C7275'>Already have an account?
          <Link component={ReactLink} to={'/login'} underline='none' color='black' fontWeight={'bold'}> log in</Link>
        </Typography>
      </Box>
      <Box component={'form'} display={'flex'} flexDirection={'column'} gap={3} mt={2}
        onSubmit={handleSubmit(registerForm)} >
        <TextField {...register('userName')} fullWidth label="User Name " variant="standard"
          error={errors.userName} helperText={errors.userName?.message} />
        <TextField {...register('fullName')} fullWidth label="Full Name" variant="standard"
          error={errors.fullName} helperText={errors.fullName?.message} />
        <TextField {...register('email')} fullWidth label="Email" variant="standard"
          error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} fullWidth label="Password" variant="standard"
          error={errors.password} helperText={errors.password?.message} />
        <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="standard"
          error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />

        <Box display={'flex'} alignItems={'center'}>
          <Checkbox />
          <Typography color='#6C7275'>I agree with {' '}
            <Box component={'span'} color='black' fontWeight={'bold'}>
              Privacy Policy
            </Box>
            {' '} and {' '}
            <Box component={'span'} color='black' fontWeight={'bold'}>
              Terms of Use
            </Box>
          </Typography>
        </Box>
        <Button type='submit' variant="contained" sx={{ backgroundColor: 'black', borderRadius: 5 }}>Submit</Button>

      </Box>
    </Box >
  )
}

import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Password } from '@mui/icons-material';
import { Box, Button, colors, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {registerSchema} from '../../../validation/RegisterSchema';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver:yupResolver(registerSchema) });
  const registerForm = async (values) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', values);
      console.log("response", response);
    }
    catch (error) {
      console.log("Registration Error:", error.response?.data || error.message)
    }
  }
  return (
    <Box component={'section'} my={5} display={'flex'} flexDirection={'column'} alignItems={'center'} mx={'auto'} width={'70%'} bgcolor={'#F6F6F6'} p={3} boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.63)' } borderRadius={5}>
      <Box>
        <Typography component={'h1'} variant='' textAlign={'center'}>Register</Typography>
      </Box>
      <Box component={'form'} display={'flex'} flexDirection={'column'} gap={3} mt={2} alignItems={'center'} width={'70%'}
        onSubmit={handleSubmit(registerForm)} >
        <TextField {...register('userName')} fullWidth label="User Name " variant="outlined"
          error={errors.userName} helperText={errors.userName?.message} />
        <TextField {...register('fullName')} fullWidth label="Full Name" variant="outlined"
          error={errors.fullName} helperText={errors.fullName?.message} />
        <TextField {...register('email')} fullWidth label="Email" variant="outlined"
          error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} fullWidth label="Password" variant="outlined"
          error={errors.password} helperText={errors.password?.message} />
        <TextField {...register('phoneNumber')} fullWidth label="Phone Number" variant="outlined"
          error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />
        <Button type='submit' variant="contained" sx={{ backgroundColor: 'black' }}>Submit</Button>

      </Box>
    </Box>
  )
}

import { Container, Box, Typography, Table, TableBody, TableCell, FormControl , InputLabel ,Select ,MenuItem, TableRow, TableContainer, Button } from '@mui/material'
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader'
import { useState } from 'react'
import useCheckout from '../../hooks/useCheckout'

export default function Checkout() {
  const { data, isLoading, isError, error } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('Ccash');
  const { mutate: checkout, isPending } = useCheckout();
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Container maxWidth={'lg'}>
      <Box my={5}>
        <Typography fontWeight={'bold'} variant='h5' mb={3}>
          Checkout
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {data.items.map(item => (
                <TableRow>
                  <TableCell>
                    {item.productName}
                  </TableCell>
                  <TableCell>
                    <Typography>{item.count}</Typography>
                  </TableCell>
                  <TableCell>
                    {item.count * item.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="paymentMethod">Payment Method</InputLabel>
        <Select
          labelId="paymentMethod"
          id="paymentMethod"
          value={paymentMethod}
          label="paymentMethod"
          onChange={(e)=>setPaymentMethod(e.target.value)}
        >
          <MenuItem value={'Cash'}>Cash</MenuItem>
          <MenuItem value={'Visa'}>Visa</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' disabled={isPending} onClick={()=>checkout(paymentMethod)}>
        Pay Now
      </Button>
    </Container>
  )
}

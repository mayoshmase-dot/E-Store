import { Container, Box, Typography, Table, TableBody, TableCell, FormControl, InputLabel, Select, MenuItem, TableRow, TableContainer, Button, TableHead } from '@mui/material'
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader'
import { useState } from 'react'
import useCheckout from '../../hooks/useCheckout'
import { useTranslation } from 'react-i18next'

export default function Checkout() {
  const { data, isLoading, isError, error } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('Ccash');
  const { mutate: checkout, isPending } = useCheckout();
  const { t } = useTranslation();
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Container maxWidth={'lg'}>
      <Box my={5}>
        <Typography fontWeight={'bold'} variant='h5' mb={3}>
          {t('Checkout')}
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>
                  {t('productName')}
                </TableCell>
                <TableCell align='center'>
                  {t('count')}
                </TableCell>
                <TableCell align='center'>
                  {t('total')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.items?.map(item => (
                <TableRow>
                  <TableCell align='center'>
                    {item.productName}
                  </TableCell>
                  <TableCell align='center'>
                    {item.count}
                  </TableCell>
                  <TableCell align='center'>
                    {item.count * item.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <FormControl fullWidth>
        <InputLabel id="paymentMethod">{t('Payment Method')}</InputLabel>
        <Select
          labelId="paymentMethod"
          id="paymentMethod"
          value={paymentMethod}
          label="paymentMethod"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value={'Cash'}>{t('Cash')}</MenuItem>
          <MenuItem value={'Visa'}>{t('Visa')}</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' disabled={isPending} onClick={() => checkout(paymentMethod)}>
        {t('Pay Now')}
      </Button>
    </Container>
  )
}

import { Container, Box, Typography, Table, TableBody, TableCell, FormControl, InputLabel, Select, MenuItem, TableRow, TableContainer, Button, TableHead, Paper, Divider } from '@mui/material'
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader'
import { useState } from 'react'
import useCheckout from '../../hooks/useCheckout'
import { useTranslation } from 'react-i18next'

export default function Checkout() {
  const { data, isLoading, isError, error } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const { mutate: checkout, isPending } = useCheckout();
  const { t } = useTranslation();

  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>

  const total = data?.items?.reduce((sum, item) => sum + item.count * item.price, 0)

  return (
    <Container maxWidth={'sm'}>
      <Box py={5}>
        <Typography fontWeight={'bold'} variant='h5' mb={3}>
          {t('Checkout')}
        </Typography>

        <Paper variant='outlined' sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.main' }}>
                  <TableCell align='center' sx={{ color: 'white'}}>{t('productName')}</TableCell>
                  <TableCell align='center' sx={{ color: 'white'}}>{t('count')}</TableCell>
                  <TableCell align='center' sx={{ color: 'white'}}>{t('total')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.items?.map((item) => (
                  <TableRow sx={{ backgroundColor: 'secondary.main' }}>
                    <TableCell align='center'>{item.productName}</TableCell>
                    <TableCell align='center'>{item.count}</TableCell>
                    <TableCell align='center' sx={{ fontWeight: 600 }}>${item.count * item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display={'flex'} justifyContent={'center'} bgcolor={'secondary.main'} px={3} py={1.5}>
            <Typography fontWeight={700}>{t('Total')}: <span style={{ color: 'inherit' }}>${total}</span></Typography>
          </Box>
        </Paper>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="paymentMethod">{t('Payment Method')}</InputLabel>
          <Select
            labelId="paymentMethod"
            value={paymentMethod}
            label={t('Payment Method')}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value={'Cash'}>{t('Cash')}</MenuItem>
            <MenuItem value={'Visa'}>{t('Visa')}</MenuItem>
          </Select>
        </FormControl>

        <Button fullWidth variant='contained' size='large' disabled={isPending} onClick={() => checkout(paymentMethod)}
          sx={{ borderRadius: 2, py: 1.5, fontWeight: 700 }}>
          {t('Pay Now')}
        </Button>
      </Box>
    </Container>
  )
}
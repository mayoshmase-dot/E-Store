import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography, IconButton, TextField, TableHead } from '@mui/material';
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateItem from '../../hooks/useUpdateItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  const navigate = useNavigate();
  const { mutate: removeItem, isPending: isPendingRemove } = useRemoveFromCart();
  const { mutate: updateItem, isPending: isPendingUpdate } = useUpdateItem();
  const handleUpdateQty = (productId, action) => {
    const item = data.items.find((i) => {
      return i.productId == productId
    })
    if (action == '-') {
      updateItem({ productId, count: item.count - 1 })
    }
    else {
      updateItem({ productId, count: item.count + 1 })
    }
  }

  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Container maxWidth={'lg'}>
      <Box display={{ xs: 'block', md: 'flex' }} gap={5} >
        <Box my={5} flex={2}>
          <Typography fontWeight={'bold'} variant='h5' mb={3}>
            Shopping Cart
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    image
                  </TableCell>
                  <TableCell>
                    productName
                  </TableCell>
                  <TableCell>
                    count
                  </TableCell>
                  <TableCell>
                    price
                  </TableCell>
                  <TableCell>
                    total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map(item => (
                  <TableRow>
                    <TableCell>
                      {item.Image}
                    </TableCell>
                    <TableCell>
                      {item.productName}
                    </TableCell>
                    <TableCell>
                      <Box display={'flex'} alignItems={'center'}>
                        <IconButton size={'small'} disabled={isPendingUpdate} onClick={() => handleUpdateQty(item.productId, '-')}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton size={'small'} disabled={isPendingUpdate} onClick={() => handleUpdateQty(item.productId, '+')}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {item.price}
                    </TableCell>
                    <TableCell>
                      {item.count * item.price}
                    </TableCell>
                    <TableCell>
                      <Button color='error' variant='contained' disabled={isPendingRemove} onClick={() => removeItem(item.productId)}>Remove</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box my={5} flex={1} flexDirection={'column'} display={'flex'} gap={3}
          boxShadow={'0px 1px 3px rgb(206, 206, 206)'} borderRadius={2} p={4}>
          <Typography fontWeight={'bold'} variant='h5'>
            Order Summary
          </Typography>
          <form>
            <Box display={'flex'} flexDirection={'column'} gap={2} >
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Typography variant='body2'>Discount code / Promo code</Typography>
                <TextField fullWidth label="Card" variant="outlined" />
              </Box>
              <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Typography variant='body2'>Your bonus card number</Typography>
                <TextField fullWidth label="Enter Card Number" variant="outlined" />
              </Box>
            </Box>
          </form>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography component={'h2'} variant='h6'>Subtotal</Typography>
              <Typography variant='span'>$2347</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography component={'h2'} color='#545454' variant='body1'>Estimated Tax</Typography>
              <Typography variant='span'>$50</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography component={'h2'} color='#545454' variant='body1'>Estimated shipping & Handling</Typography>
              <Typography variant='span'>$29</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography component={'h2'} variant='h6'>Total</Typography>
              <Typography variant='span'>$2426</Typography>
            </Box>
          </Box>
          <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={() => navigate('/checkout')}>Checkout</Button>
        </Box>
      </Box>
    </Container>
  )
}

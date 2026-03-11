import { Box, Button, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  const { mutate, isPending } = useRemoveFromCart();
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box>
      <Typography variant='h6'>
        Shopping Cart
      </Typography>
      <TableContainer>
        <Table>
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
                  {item.count}
                </TableCell>
                <TableCell>
                  {item.price}
                </TableCell>
                <TableCell>
                  {item.count * item.price}
                </TableCell>
                <TableCell>
                  <Button color='error' variant='contained' disabled={isPending} onClick={() => mutate(item.productId)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

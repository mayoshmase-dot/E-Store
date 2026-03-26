import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography, IconButton } from '@mui/material';
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateItem from '../../hooks/useUpdateItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  console.log('data')
  console.log(data)

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
    <Container maxWidth={'md'}>
      <Box my={5}>
        <Typography fontWeight={'bold'} variant='h5' mb={3}>
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
    </Container>
  )
}

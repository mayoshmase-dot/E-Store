import { Box } from '@mui/material';
import useCart from '../../hooks/useCart'
import Loader from '../../ui/loader/Loader';

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  console.log(data)

  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <div>Cart</div>
  )
}

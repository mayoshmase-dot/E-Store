import useCart from '../../hooks/useCart'

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  if (isLoading) return <Loader />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  
  console.log(data)
  return (
    <div>Cart</div>
  )
}

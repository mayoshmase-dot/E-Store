import { Box, CircularProgress } from '@mui/material';
import useProducts from '../../hooks/useProducts'

export default function Products() {
    const {data , isError , isLoading , error} = useProducts();
    if (isLoading) return <CircularProgress />
        if (isError) return <Box color={'red'}>{error.message}</Box>
    console.log(data)
  return (
    <Box>
        {data.response.data.map(product=><Box>{product.name}</Box>)}
    </Box>
  )
}

import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts'
import Loader from '../../ui/loader/Loader';
import {Link as ReactLink} from 'react-router-dom';
export default function Products() {
    const { data, isError, isLoading, error } = useProducts();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Box py={5}>
            <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                Products
            </Typography>
            <Grid container spacing={5}>
                {data.response.data.map((product) =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                       <Link component={ReactLink} to={`/product/${product.id}`} underline='none' >
                         <Card sx={{ backgroundColor: 'rgba(205, 207, 207, 0.34)', textAlign: 'center' }}>
                            <CardMedia component={'img'} image={product.image}></CardMedia>
                            <CardContent sx={{display:'flex',flexDirection:'column',gap:2,p:3}}>
                                <Typography component={'h3'} variant='body1'>
                                    {product.name}
                                </Typography>
                                <Typography component={'span'} variant='body1' fontWeight={'bold'}>
                                    ${product.price}
                                </Typography>
                                <Button type='submit'sx={{backgroundColor:'black' , color:'white'}}>Buy Now</Button>
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>)}
            </Grid>
        </Box>
    )
}

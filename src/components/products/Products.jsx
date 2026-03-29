import { Box, Container, Button, Grid, Link, Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts'
import Loader from '../../ui/loader/Loader';
import Product from '../../ui/products/Products';
import { Link as ReactLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Products() {
        const {t} = useTranslation();
    const { data, isError, isLoading, error } = useProducts();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth='lg'>

            <Box my={5}>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                   {t('Products')}
                </Typography>
                <Grid container spacing={5}>
                    {data.response.data.map((product) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Link component={ReactLink} to={`/product/${product.id}`} underline='none' >
                                <Product product={product} />
                            </Link>
                        </Grid>)}
                </Grid>
                <Link component={ReactLink} to={'products'} underline='none' sx={{ display: 'flex', justifyContent: 'center', mt: 5, alignItems: 'center' }}>
                    <Button type='submit' sx={{ backgroundColor: 'black', color: 'white', px: 3 }}>{t('Show More')}</Button></Link>
            </Box>
        </Container>
    )
}

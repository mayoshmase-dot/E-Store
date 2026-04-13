import { Box, Container, Button, Grid, Link, Typography, IconButton } from '@mui/material';
import useProducts from '../../hooks/useProducts'
import Loader from '../../ui/loader/Loader';
import Product from '../../ui/products/Products';
import { Link as ReactLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function Products() {
    const { t } = useTranslation();
    const [fillter, setFillter] = useState({
        limit: 3, page: 1, sortBy: 'price', price: '', search: '', ascending: 'false'
    })
    const { data, isError, isLoading, error } = useProducts(fillter)
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth='lg'>
            <Box>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                    {t('Products')}
                </Typography>
                <Grid container spacing={5}>
                    {data.response.data.map((product) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} position={'relative'} bgcolor={'secondary.main'} key={product.id}>
                            <Product product={product} />
                            <IconButton sx={{ position: 'absolute', top: 0, right: 0, color: 'secondary.dark', '&:hover': { color: 'red' } }}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Grid>)}

                </Grid>
                <Link component={ReactLink} to={'products'} underline='none' sx={{ display: 'flex', justifyContent: 'center', mt: 5, alignItems: 'center' }}>
                    <Button type='submit' sx={{ backgroundColor: 'primary.main', color: 'white', px: 3 }}>{t('Show More')}</Button></Link>
            </Box>
        </Container>
    )
}

import { Box, Container, Grid, Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts'
import Loader from '../../ui/loader/Loader';
import Products from '../../ui/products/Products';
import { useTranslation } from 'react-i18next';

export default function ProductPage() {
    const { t } = useTranslation();
    const { data, isError, isLoading, error } = useProducts(4);
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Container maxWidth={'md'} >
            <Box py={5}>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                    {t('Products')}
                </Typography>
                <Grid container spacing={5}>
                    {data.response.data.map((product) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Products product={product} />
                        </Grid>)}
                </Grid>
            </Box>
        </Container>
    )
}

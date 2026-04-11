import { Box, Container, Grid, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import useProductsByCategory from '../../hooks/useProductsByCategory'
import Loader from '../../ui/loader/Loader';
import Products from '../../ui/products/Products';

export default function ProductsByCategory() {
    const { t } = useTranslation();
    const { id } = useParams()
    const { data, isLoading, isError, error } = useProductsByCategory(id)
    const name = localStorage.getItem('name')
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth={'lg'}>
            <Box py={5}>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                    {t('Products')} {t('by')} {name}
                </Typography>
                <Grid container spacing={5}>
                    {data.response.map((product) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                            <Products product={product} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </Container>
    )
}
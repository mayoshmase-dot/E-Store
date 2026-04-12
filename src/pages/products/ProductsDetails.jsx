import useProductDetails from '../../hooks/useProductDetails'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/loader/Loader';
import { Box, Button, Card, CardMedia, Container, Grid, Rating, TextField, Typography } from '@mui/material';
import useAddCart from '../../hooks/useAddCart';
import { useTranslation } from 'react-i18next';
import ProductReviews from '../../components/review/ProductReviews';
import CreateReviews from '../../components/review/CreateReviews';

export default function ProductsDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductDetails({ id });
    const { mutate, isPending } = useAddCart();

    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    const product = data.response;


    return (
        <Container maxWidth={'lg'}>
            <Box py={6}>
                <Grid container spacing={6}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ borderRadius: 4, backgroundColor: 'secondary.main', p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia component={'img'} image={product.image}
                                sx={{ width: '100%', maxHeight: 380, objectFit: 'contain' }} />
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} display={'flex'} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'} gap={3}>
                            <Typography variant='h4' fontWeight={'bold'}>
                                {product.name}
                            </Typography>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <Rating readOnly value={product.rate} />
                            </Box>
                            <Typography variant='h5' fontWeight={'bold'} color={'primary.main'}>
                                ${product.price}
                            </Typography>
                            <Typography variant='body2' fontWeight={'bold'}>
                                {`${t('Quantity')}: ${product.quantity}`}
                            </Typography>
                            <Box sx={{ maxHeight: 150, overflow: 'auto' }}>
                                <Typography variant='body2' color={'secondary.dark'}>
                                    {product.description}
                                </Typography>
                            </Box>
                            <Button variant='contained' disabled={isPending}
                                onClick={() => mutate({ ProductId: product.id, Count: 1 })}
                                sx={{ py: 1.5, borderRadius: 2, backgroundColor: 'primary.main' }}>
                                {t('Add To Cart')}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <CreateReviews id={product.id} />
            <ProductReviews reviews={product.reviews} />
        </Container>
    )
}
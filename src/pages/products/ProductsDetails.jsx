import useProductDetails from '../../hooks/useProductDetails'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/loader/Loader';
import { Box, Button, Card, CardMedia, Container, Grid, Rating, TextField, Typography } from '@mui/material';
import useAddCart from '../../hooks/useAddCart';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useAddReview from '../../hooks/useAddReview';

export default function ProductsDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductDetails({ id });
    const { mutate, isPending } = useAddCart();
    const { mutate: addReview, isPending: isReviewPending } = useAddReview(id);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')


    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    const product = data.response;

    return (
        <Container maxWidth={'lg'}>
            <Box py={6}>
                <Grid container spacing={6}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Card sx={{ borderRadius: 4, backgroundColor: 'secondary.main', p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component={'img'}
                                image={product.image}
                                sx={{ width: '100%', maxHeight: 380, objectFit: 'contain' }}
                            />
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

            <Box mt={6} p={4} sx={{ backgroundColor: 'secondary.main', borderRadius: 4 }}>
                <Typography variant='h5' fontWeight={'bold'} mb={1}>
                    {t('Add Review')}
                </Typography>
                <Typography variant='body2' color={'secondary.dark'} mb={3}>
                    {t('Share your experience with this product')}
                </Typography>

                <Box display={'flex'} flexDirection={'column'} gap={3}>
                    <Box>
                        <Typography variant='body2' fontWeight={'bold'} mb={1}>
                            {t('Your Rating')}
                        </Typography>
                        <Rating
                            size='large'
                            value={rating}
                            onChange={(e, newValue) => setRating(newValue)}
                        />
                    </Box>

                    <TextField
                        fullWidth multiline rows={3}
                        label={t('Your Comment')}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        sx={{ backgroundColor: 'secondary.main', borderRadius: 2 }}
                    />

                    <Button
                        variant='contained'
                        disabled={isReviewPending}
                        onClick={() => addReview({ Rating: rating, Comment: comment })}
                        sx={{ width: 'fit-content', px: 5, py: 1.5, borderRadius: 2 }}>
                        Submitting
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
import useProductDetails from '../../hooks/useProductDetails'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/loader/Loader';
import { Box, Button, Card, CardMedia, Grid, Rating, Typography } from '@mui/material';
import useAddCart from '../../hooks/useAddCart';

export default function ProductsDetails() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductDetails({ id });
    const { mutate, isPending } = useAddCart();
    console.log(data)
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
            <Card sx={{ p: 2, backgroundColor: 'rgba(205, 207, 207, 0.34)' }} >
                <Grid container display={'flex'}  >
                    <Grid item size={{ xs: 12, md: 6 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <CardMedia component={'img'} image={data.response.image} sx={{ width: '300px', display: 'flex', alignItems: 'center' }}></CardMedia>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} display={'flex'} alignItems={'center'} mt={1}>
                        <Box display={'flex'} flexDirection={'column'} gap={2} justifyContent={'center'}>
                            <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                                <Typography variant='h5'>{data.response.name}</Typography>
                                <Typography variant='span' fontWeight={'bold'} display={'block'}>${data.response.price}</Typography>
                                <Rating readOnly value={data.response.rate}> </Rating>
                            </Box>
                            <Typography variant='body2'>{data.response.description}</Typography>
                            <Button sx={{ backgroundColor: 'black', color: 'white' }} disabled={isPending} onClick={() => mutate({ ProductId: data.response.id, Count:1 ,})}>Add To Cart</Button>

                        </Box>
                    </Grid>
                </Grid>

            </Card>
        </Box >
    )
}

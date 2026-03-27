import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Loader from '../../ui/loader/Loader';

export default function Categories() {

    const { data, isLoading, isError, error } = useCategories();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth={'lg'} >
        <Box my={5}>
            <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>Browse By Category</Typography>
            <Grid container spacing={5}>
                {data.response.data.map((category) =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Card sx={{ py: 3, backgroundColor: 'rgba(205, 207, 207, 0.34)', textAlign: 'center' }}>
                            <CardContent>
                                <Typography component={'h3'} variant='body1' fontWeight={'bold'}>
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                )}
            </Grid>


        </Box >
        </Container>
    )
}

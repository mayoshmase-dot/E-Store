import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Loader from '../../ui/loader/Loader';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const { t } = useTranslation();
    const { data, isLoading, isError, error } = useCategories();
    const navigate = useNavigate()
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth={'lg'} >
            <Box my={5}>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>{t('Browse By Category')}</Typography>
                <Grid container spacing={5}>
                    {data.response.data.map((category) =>
                        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={category.id}>
                            <Card onClick={() => navigate(`/category/${category.id}`,{ state: { name: category.name } })}
                                sx={{ py: 3, backgroundColor: 'secondary.main', textAlign: 'center', cursor: 'pointer' }}>
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

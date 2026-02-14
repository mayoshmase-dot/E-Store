import { Box, Card, CircularProgress, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';

export default function Categories() {

    const { data, isLoading, isError, error } = useCategories();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box display={'flex'} gap={3} mt={2} >
            {data.response.map((category) => (
                <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 7,  flex: "1 1 200px" , backgroundColor: 'rgba(205, 207, 207, 0.34)' }}>
                    <Typography textAlign={'center'} >
                        {category.name} 
                    </Typography>
                </Card>
            ))}

        </Box >
    )
}

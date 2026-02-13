import axios from 'axios'
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import {useQuery} from '@tanstack/react-query'
export default function Categories() {

    const getCategories = async () => {
        const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories');
        return (response.data.response)
    }
  const {data , isLoading , isError , error} = useQuery({
        queryKey : ['categories'] ,
        queryFn : getCategories  ,
        staleTime : 100 * 60 * 5 }) ;

        if(isLoading) return <CircularProgress/>
        if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box display={'flex'} gap={3} mt={2} >
            {data.map((category) => (
                <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 7 }}>
                    <Typography textAlign={'center'} >
                        {category.name}
                    </Typography>
                </Card>

            ))}

        </Box >
    )
}

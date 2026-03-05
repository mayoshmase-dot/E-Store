import useProductDetails from '../../hooks/useProductDetails'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/loader/Loader';
import { Box } from '@mui/material';

export default function ProductsDetails() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductDetails({id});
    console.log(data)
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <div>ProductsDetails</div>
    )
}

import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Products({ product }) {
    const navigate = useNavigate()

    return (
        <Card onClick={() => navigate(`/product/${product.id}`)}
            sx={{ cursor: 'pointer', backgroundColor: 'secondary.main', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component={'img'} image={product.image} sx={{ width:'100%' ,objectFit: 'cover' }} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, flexGrow: 1 }}>
                <Typography component={'h3'} variant='body1'>
                    {product.name}
                </Typography>
                <Typography component={'span'} variant='body1' fontWeight={'bold'}>
                    ${product.price}
                </Typography>
            </CardContent>
        </Card>
    )
}
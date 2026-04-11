import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function Products({ product }) {
    return (
        <Card sx={{ backgroundColor: 'secondary.main', textAlign: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component={'img'} image={product.image} sx={{ height: 300, objectFit: 'cover' }} />
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

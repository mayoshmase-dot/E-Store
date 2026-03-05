import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function Products({ product }) {
    return (
        <Card sx={{ backgroundColor: 'rgba(205, 207, 207, 0.34)', textAlign: 'center' }}>
            <CardMedia component={'img'} image={product.image}></CardMedia>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
                <Typography component={'h3'} variant='body1'>
                    {product.name}
                </Typography>
                <Typography component={'span'} variant='body1' fontWeight={'bold'}>
                    ${product.price}
                </Typography>
                <Button type='submit' sx={{ backgroundColor: 'black', color: 'white' }}>Buy Now</Button>
            </CardContent>
        </Card>
    )
}

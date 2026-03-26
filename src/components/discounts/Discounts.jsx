import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import AppleIPhone14Pro512GB from "../../assets/img/Apple iPhone 14 Pro 512GB.webp"
import AirPods from "../../assets/img/AirPods.webp"
import AppleWatch from "../../assets/img/Apple Watch.webp"
import AppleiPhone14Pro1TB from "../../assets/img/Apple iPhone 14 Pro 1TB.webp"

export default function Discounts() {
    return (
        <Container maxWidth={'md'}>
            <Box >
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                    Discounts up to -50%
                </Typography>

                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={3} bgcolor={'#F6F6F6'} textAlign={'center'} display={'flex'} flexDirection={'column'} gap={2}>
                        <CardMedia component="img" image={AppleIPhone14Pro512GB}
                            alt="iphone" sx={{ objectFit: "contain", width: "100%" }} />
                        <Typography variant='body2'>
                            Apple iPhone 14 Pro 512GB Gold (MQ233)
                        </Typography>
                        <Typography variant='span' fontWeight={'bold'}>$1437</Typography>
                        <Button variant='contained' sx={{ backgroundColor: 'black', color: 'white' }}>Buy Now</Button>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={3} bgcolor={'#F6F6F6'} textAlign={'center'} display={'flex'} flexDirection={'column'} gap={2}>
                        <CardMedia component="img" image={AirPods}
                            alt="iphone" sx={{ objectFit: "contain", width: "100%" }} />
                        <Typography variant='body2'>
                            AirPods Max Silver
                            Starlight Aluminium
                        </Typography>
                        <Typography variant='span' fontWeight={'bold'}>$549</Typography>
                        <Button variant='contained' sx={{ backgroundColor: 'black', color: 'white' }}>Buy Now</Button>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={3} bgcolor={'#F6F6F6'} textAlign={'center'} display={'flex'} flexDirection={'column'} gap={2}>
                        <CardMedia component="img" image={AppleWatch}
                            alt="iphone" sx={{ objectFit: "contain", width: "100%" }} />
                        <Typography variant='body2' fontSize={12.5}>
                            Apple Watch Series 9 GPS 41mm Starlight Aluminium
                        </Typography>
                        <Typography variant='span' fontWeight={'bold'}>$399</Typography>
                        <Button variant='contained' sx={{ backgroundColor: 'black', color: 'white' }}>Buy Now</Button>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={3} bgcolor={'#F6F6F6'} textAlign={'center'} display={'flex'} flexDirection={'column'} gap={2}>
                        <CardMedia component="img" image={AppleiPhone14Pro1TB}
                            alt="iphone" sx={{ objectFit: "contain", width: "100%" }} />
                        <Typography variant='body2'>
                            Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                        </Typography>
                        <Typography variant='span' fontWeight={'bold'}>$1499</Typography>
                        <Button variant='contained' sx={{ backgroundColor: 'black', color: 'white' }}>Buy Now</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

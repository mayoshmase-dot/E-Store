import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import IphoneImage from "../../assets/img/IphoneImage.webp"
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
       <Box bgcolor={'#211C24'} p={2}>
            <Grid container>

                <Grid item size={{ xs: 12, md: 6 }} display="flex" justifyContent="center" alignItems="center">
                    <Box color="white" display="flex" flexDirection="column" gap={3} alignItems="center" textAlign="center">
                        <Typography component="h2" variant="h3">IPhone 14 Pro </Typography>

                        <Typography variant="body1"> Created to change everything for the better. For everyone</Typography>

                        <Button variant="outlined" component={Link} to="/products" sx={{ color: "white", borderColor: "white" }}>
                            Shop Now
                        </Button>
                    </Box>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                    <CardMedia component="img" image={IphoneImage}
                        alt="iphone" sx={{ height: 400, objectFit: "contain", width: "100%" }}/>
                </Grid>
            </Grid>
        </Box>
    )
}

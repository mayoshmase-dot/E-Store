import image from "../../assets/img/image.webp"
import Screen from "../../assets/img/Screen.webp"
import PlayStation from "../../assets/img/PlayStation.webp"
import hero from "../../assets/img/hero.webp"
import { Box, Grid, CardMedia, Typography, Button } from '@mui/material'



export default function FeaturedSection() {
  return (
    <Box my={5}>
      <Grid container>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box display={'flex'} flexDirection={{xs:'column' , md:'row'}} textAlign={'center'} alignItems={'center'} gap={2}>
            <Box>
              <CardMedia component="img" image={PlayStation}
                alt="iphone" sx={{ height: 400, objectFit: "contain", width: "100%" }} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={3}>
              <Typography component={'h2'} variant='h3' fontWeight={'bold'}>Playstation 5</Typography>
              <Typography variant='body1'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</Typography>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={{xs:'column' , md:'row'}} textAlign={'center'}>
            <Box display={'flex'} alignItems={'center'} flexDirection={{xs:'column' , md:'row'}} gap={5} bgcolor={'#EDEDED'} >
              <Box>
                <CardMedia component="img" image={hero}
                  alt="iphone" sx={{ height: 400, objectFit: "contain", width: "100%" }} />
              </Box>
              <Box>
                <Box>
                  <Typography component={'h2'} variant='h4'>Apple AirPods</Typography>
                  <Typography component={'h2'} variant='h3' fontWeight={'bold'}>Max</Typography>
                </Box>
                <Typography variant='body1'>Computational aduio.Listen,it's powerful</Typography>
              </Box>
            </Box>

            <Box>
              <Box display={'flex'} flexDirection={{xs:'column' , md:'row'}} height={'100%'} textAlign={'center'} alignItems={'center'} gap={5} bgcolor={'#353535'}>
                <Box>
                  <CardMedia component="img" image={image}
                    alt="iphone" sx={{ height: 400, objectFit: "contain", width: "100%" }} />
                </Box>
                <Box color={'white'}>
                    <Typography component={'h2'} variant='h4'>Apple</Typography>
                    <Typography component={'h2'} variant='h4' fontWeight={'bold'}>Vision Pro</Typography>
                  <Typography variant='body1' color="#909090">An immersive way to experience entertainment</Typography>
                </Box>
              </Box>

            </Box>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }} display={'flex'} flexDirection={{xs:'column' , md:'row'}} gap={5} alignItems={'center'} bgcolor={"#EDEDED"} pl={5} >
          <Box display={'flex'} flexDirection={'column'} gap={3} alignItems={'flex-start'}>
            <Box>
              <Typography component={'h2'} variant='h4'>Macbook</Typography>
              <Typography component={'h2'} variant='h3' fontWeight={'bold'}>Air</Typography>
            </Box>
            <Typography variant='body1' color="#909090">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</Typography>
            <Button sx={{ border: '1px solid black', color: 'black', textAlign: 'center', px: 2 }} >Shop Now</Button>
          </Box>
          <Box>
            <CardMedia component="img" image={Screen}
              alt="iphone" sx={{ height: 400, objectFit: "contain", width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}

import image from "../../assets/img/image.webp"
import Screen from "../../assets/img/Screen.webp"
import PlayStation from "../../assets/img/PlayStation.webp"
import hero from "../../assets/img/hero.webp"
import { Box, Grid, CardMedia, Typography, Button } from '@mui/material'
import { useTranslation } from "react-i18next"

export default function FeaturedSection() {
  const {t} = useTranslation();
  return (
    <Box>
      <Grid container>
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} textAlign={'center'} alignItems={'center'} gap={1}>
            <Box>
              <CardMedia component="img" image={PlayStation}
                alt="iphone" sx={{ height: 200, objectFit: "contain", width: "100%" }} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography component={'h2'} variant='h5' fontWeight={'bold'}> Playstation 5</Typography>
              <Typography variant='body2'>{t('Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.')}</Typography>
            </Box>
          </Box>

          <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} textAlign={'center'}>
            <Box display={'flex'} alignItems={'center'} flexDirection={{ xs: 'column', md: 'row' }} gap={2} bgcolor={'#EDEDED'}>
              <Box>
                <CardMedia component="img" image={hero}
                  alt="iphone" sx={{ height: 200, objectFit: "contain", width: "100%" }} />
              </Box>
              <Box px={7}>
                <Typography component={'h2'} variant='body1'>Apple AirPods</Typography>
                <Typography component={'h2'} variant='h6' fontWeight={'bold'}>Max</Typography>
                <Typography variant='body2'>{t("Computational audio. Listen, it's powerful")}</Typography>
              </Box>
            </Box>

            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} height={'100%'} textAlign={'center'} alignItems={'center'} gap={2} bgcolor={'#353535'}>
              <Box>
                <CardMedia component="img" image={image}
                  alt="iphone" sx={{ height: 200, objectFit: "contain", width: "100%" }} />
              </Box>
              <Box color={'white'} px={7} >
                <Typography component={'h2'} variant='body1'>Apple</Typography>
                <Typography component={'h2'} variant='h6' fontWeight={'bold'}>Vision Pro</Typography>
                <Typography variant='body2' color="#909090">{t('An immersive way to experience entertainment')}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} gap={2} alignItems={'center'} bgcolor={"#EDEDED"} pl={3}>
          <Box display={'flex'} flexDirection={'column'} gap={2}  sx={{ alignItems:{sm:"center", md:'flex-start'}}} p={1}>
            <Box>
              <Typography component={'h2'} variant='h6'>Macbook</Typography>
              <Typography component={'h2'} variant='h5' fontWeight={'bold'}>Air</Typography>
            </Box>
            <Typography variant='body2' color="#909090">{t('The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.')}</Typography>
            <Button sx={{ border: '1px solid black', color: 'black', textAlign: 'center', px: 2 }} >{t('Shop Now')}</Button>
          </Box>
          <Box>
            <CardMedia component="img" image={Screen}
              alt="iphone" sx={{ height: 200, objectFit: "contain", width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
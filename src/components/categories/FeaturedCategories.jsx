import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import PopularProducts from "../../assets/img/PopularProducts.webp"
import IpadPro from "../../assets/img/IpadPro.webp"
import SamsungGalaxy from "../../assets/img/SamsungGalaxy.webp"
import MacbookPro from "../../assets/img/MacbookPro.webp"

import { useTranslation } from "react-i18next";
export default function FeaturedCategories() {
  const { t } = useTranslation();
  return (
    <Box py={5}>
      <Grid container>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={2} display={'flex'} gap={2} flexDirection={'column'} alignItems={'flex-start'}>
          <CardMedia component="img" src={PopularProducts} alt="IpadPro" sx={{ height: '50%', objectFit: 'contain', width: '100%' }} />
          <Typography component={'h2'} variant={'h4'} fontWeight={'light'}>
            {t('Popular Products')}
          </Typography>
          <Typography variant="body2" color="secondary.dark">
            {t('iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.')}
          </Typography>
          <Button variant="outlined" color="primary.main" sx={{ px: 3 }}>{t('Shop Now')}</Button>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={2} display={'flex'} gap={2} flexDirection={'column'} alignItems={'flex-start'}>
          <CardMedia component="img" src={IpadPro} alt="IpadPro" sx={{ height: '50%', objectFit: 'contain', width: '100%' }} />
          <Typography component={'h2'} variant={'h4'} fontWeight={'light'}>
            {t('Ipad Pro')}
          </Typography>
          <Typography variant="body2" color="secondary.dark">
            {t('iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.')}
          </Typography>
          <Button variant="outlined" color="primary.main" sx={{ px: 3 }}>{t('Shop Now')}</Button>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} bgcolor={'secondary.main'} p={2} display={'flex'} gap={2} flexDirection={'column'} alignItems={'flex-start'}>
          <CardMedia component="img" src={SamsungGalaxy} alt="SamsungGalaxy" sx={{ height: '50%', objectFit: 'contain', width: '100%' }} />
          <Typography component={'h2'} variant={'h4'} fontWeight={'light'}>
            {t('Samsung Galaxy')}
          </Typography>
          <Typography variant="body2" color="secondary.dark">
            {t('iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.')}
          </Typography>
          <Button variant="outlined" color="primary.main" sx={{ px: 3 }}>{t('Shop Now')}</Button>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} bgcolor={'#2C2C2C'} p={2} display={'flex'} gap={2} flexDirection={'column'} alignItems={'flex-start'}>
          <CardMedia component="img" src={MacbookPro} alt="MacbookPro" sx={{ height: '50%', objectFit: 'contain', width: '100%' }} />
          <Typography component={'h2'} variant={'h4'} color="white" fontWeight={'light'}>
            {t('Macbook Pro')}
          </Typography>
          <Typography variant="body2" color="secondary.dark">
            {t('iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.')}
          </Typography>
          <Button variant="outlined" sx={{ border: '1px solid white', px: 3, color: 'white' }}>{t('Shop Now')}</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';
export default function Footer() {
  const {t} = useTranslation();

  return (
    <Box bgcolor={'primary.main'} color={'white'}>
      <Container maxWidth={'lg'}>
        <Grid container p={5} spacing={5}>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              Store
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('We are a residential interior design firm located in Portland. Our boutique-studio offers more than')}
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              {t('Services')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Bonus program')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Credit and payment')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Service contracts')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Gift cards')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Non-cash account')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Payment')}
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              {t('Assistance to the buyer')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Find an order')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Terms of delivery')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Exchange and return of goods')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Guarantee')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Frequently asked questions')}
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              {t('Terms of use of the site')}
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>

    </Box>
  )
}

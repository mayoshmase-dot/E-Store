import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <Box bgcolor={'#000000'} color={'white'}>
      <Container maxWidth={'lg'}>
        <Grid container p={5} spacing={5}>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              Cyber
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              Services
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Bonus program
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Credit and payment
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Service contracts
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Gift cards
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Non-cash account
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Payment
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} gap={3}>
            <Typography component={'h2'} variant='h5'>
              Assistance to the buyer
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Find an order
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Terms of delivery
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Exchange and return of goods
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Guarantee
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Frequently asked questions
            </Typography>
            <Typography variant='body2' color='#CFCFCF'>
              Terms of use of the site
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

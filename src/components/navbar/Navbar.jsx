import { AppBar, Box, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart'
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n.js";

export default function Navbar() {
  const token = useAuthStore((state) => state.token)
  const logout = useAuthStore((state) => state.logout)
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLng = i18n.language === "ar" ? "en" : "ar"
    i18n.changeLanguage(newLng);
  }
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  const { data } = useCart()
  const cartCount = data?.items?.length || 0;

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ color: "primary.main" }}>
            {t('Store')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5 }}>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'secondary.dark' ,'&:hover': { color: 'primary.main' } }}>{t('Home')}</Link>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'secondary.dark','&:hover': { color: 'primary.main' } }}>{t('About')}</Link>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'secondary.dark', '&:hover': { color: 'primary.main' } }}>{t('Contact Us')}</Link>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'secondary.dark','&:hover': { color: 'primary.main' } }}>{t('Blog')}</Link>

          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }}}>

            <button onClick={changeLanguage}>{i18n.language === "ar" ? "EN" : "AR"}</button>

            <IconButton sx={{ color: 'primary.main' , '&:hover': { color: 'secondary.dark' }}}>
              <FavoriteBorderIcon />
            </IconButton>
            {token ?
              (
                <>
                  <Badge badgeContent={cartCount} color="primary" >
                      <IconButton component={RouterLink} to={'/cart'} sx={{ color: 'primary.main' , '&:hover': { color: 'secondary.dark' } }} ><ShoppingCartOutlinedIcon />
                      </IconButton>
                  </Badge>
                    <IconButton component={'button'} onClick={handleLogout} underline='none' sx={{ color: 'primary.main' , '&:hover': { color: 'rgb(144, 151, 155)' } }}><LogoutIcon />
                    </IconButton>
                </>
              ) :
              (
                <>
                  <IconButton component={RouterLink} to={'/login'} sx={{ color: 'primary.main' , '&:hover': { color: 'secondary.dark' } }}>
                    <LoginIcon />
                  </IconButton>
                    <IconButton component={RouterLink} to={'/register'}  sx={{ color: 'primary.main ' , '&:hover': { color: 'secondary.dark' } }}><PersonAddIcon />
                  </IconButton>
                </>
              )
            }
            <IconButton sx={{ color: 'primary.main' , '&:hover': { color: 'secondary.dark' } }} >
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton sx={{ color: 'primary.main', display: { xs: 'flex', sm: 'none' } , '&:hover': { color: 'secondary.dark' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

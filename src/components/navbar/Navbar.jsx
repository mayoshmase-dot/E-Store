import { AppBar, Box, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
          <Typography variant="h6" component="div" sx={{ color: "rgb(0, 0, 0)" }}>
            {t('Store')}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5 }}>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'rgb(144, 151, 155)' }}>{t('Home')}</Link>
            {token ?
              (
                <>
                  <Badge badgeContent={cartCount} color="secondary">
                    <Link component={RouterLink} to={'/cart'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>{t('Cart')}
                    </Link>
                  </Badge>
                  <Link component={'button'} onClick={handleLogout} to={'/cart'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>{t('Logout')}</Link>
                </>
              ) :
              (
                <>
                  <Link component={RouterLink} to={'/login'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>{t('Login')}</Link>
                  <Link component={RouterLink} to={'/register'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>{t('Register')}</Link>
                </>
              )
            }
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>

            <button onClick={changeLanguage}>{i18n.language === "ar" ? "EN" : "AR"}</button>

            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton sx={{ color: 'rgb(0, 0, 0)', display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

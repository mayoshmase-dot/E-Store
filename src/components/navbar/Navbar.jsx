import { AppBar, Box, Toolbar, Typography, IconButton, Badge, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'
import LanguageIcon from '@mui/icons-material/Language';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useThemeStore from '../../store/useThemeStore';
import i18n from '../../i18n';

export default function Navbar() {
  const token = useAuthStore((state) => state.token)
  const logout = useAuthStore((state) => state.logout)
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const changeLanguage = () => {
    const newLang = i18n.language == 'ar' ? 'en' : "ar"
    i18n.changeLanguage(newLang)
  }
  const { data } = useCart()
  const cartCount = data?.items?.length || 0;
  const mode = useThemeStore((state) => state.mode)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Typography variant="h6" sx={{ color: "primary.main" }}>
            {t('Store')}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5, alignItems: 'center' }}>
            <Link component={RouterLink} sx={{ color: 'secondary.dark', '&:hover': { color: 'primary.main' } }} underline='none' to='/'>{t('Home')}</Link>
            <Link component={RouterLink} sx={{ color: 'secondary.dark', '&:hover': { color: 'primary.main' } }} underline='none' to='/products'>{t('Shopping')}</Link>
            <Link sx={{ color: 'secondary.dark', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} underline='none'>{t('About')}</Link>
            {token && (
              <Badge badgeContent={cartCount} color='primary'  >
                <Link component={RouterLink} to='/cart' sx={{ color: 'secondary.dark', '&:hover': { color: 'primary.main' }, display: 'flex', alignItems: 'center' }} underline='none'>
                  {t('Cart')}
                </Link>
              </Badge>
            )}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>

            <Badge badgeContent={i18n.language === 'ar' ? 'EN' : 'AR'} sx={{ color: 'primary.main' }}>
              <IconButton sx={{ color: 'primary.main' }} onClick={changeLanguage}>
                <LanguageIcon />
              </IconButton>
            </Badge>

            <IconButton sx={{ color: 'primary.main' }} onClick={toggleTheme}>
              {mode === 'light' ? <LightMode sx={{ color: 'orange' }} /> : <DarkMode sx={{ color: 'primary.main' }} />}
            </IconButton>
            {token ? (
              <>
                <IconButton onClick={handleLogout} sx={{ color: 'primary.main' }}><LogoutIcon /></IconButton>
                <IconButton component={RouterLink} to='/profile' sx={{ color: 'primary.main' }}><AccountCircleIcon /></IconButton>
              </>
            ) : (
              <>
                <IconButton component={RouterLink} to='/login' sx={{ color: 'primary.main' }}><LoginIcon /></IconButton>
                <IconButton component={RouterLink} to='/register' sx={{ color: 'primary.main' }}><PersonAddIcon /></IconButton>
              </>
            )}
          </Box>

          <IconButton sx={{ color: 'primary.main', display: { xs: 'flex', sm: 'none' } }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem><Typography color="primary">{t('Store')}</Typography></ListItem>
            <Divider />
            <ListItemButton component={RouterLink} to='/'><ListItemText primary={t('Home')} /></ListItemButton>
            <ListItemButton component={RouterLink} to='/products'><ListItemText primary={t('Shopping')} /></ListItemButton>
            <ListItemButton><ListItemText primary={t('About')} /></ListItemButton>
            <ListItemButton onClick={changeLanguage}>
              <ListItemIcon><LanguageIcon /></ListItemIcon>
              <ListItemText primary={i18n.language === 'ar' ? 'EN' : 'AR'} />
            </ListItemButton>
            <ListItemButton onClick={toggleTheme}>
              <ListItemIcon>{mode === 'light' ? <LightMode sx={{ color: 'orange' }} /> : <DarkMode />}</ListItemIcon>
              <ListItemText primary={mode === 'light' ? t('Dark Mode') : t('Light Mode')} />
            </ListItemButton>
            <Divider />
            {token ? (
              <>
                <ListItemButton component={RouterLink} to='/cart'>
                  <ListItemIcon><Badge badgeContent={cartCount} color="primary"><ShoppingCartOutlinedIcon /></Badge></ListItemIcon>
                  <ListItemText primary={t('Cart')} />
                </ListItemButton>
                <ListItemButton component={RouterLink} to='/profile'>
                  <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                  <ListItemText primary={t('Profile')} />
                </ListItemButton>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
                  <ListItemText primary={t('Logout')} sx={{ color: 'error.main' }} />
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton component={RouterLink} to='/login'>
                  <ListItemIcon><LoginIcon /></ListItemIcon>
                  <ListItemText primary={t('Sign In')} />
                </ListItemButton>
                <ListItemButton component={RouterLink} to='/register'>
                  <ListItemIcon><PersonAddIcon /></ListItemIcon>
                  <ListItemText primary={t('Sign Up')} />
                </ListItemButton>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
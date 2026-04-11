import { AppBar, Box, Toolbar, Typography, IconButton, Badge, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navbar() {
  const token = useAuthStore((state) => state.token)
  const logout = useAuthStore((state) => state.logout)
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { data } = useCart()
  const cartCount = data?.items?.length || 0;

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

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5 }}>
            <RouterLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}>{t('Home')}</RouterLink>
            <RouterLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}>{t('About')}</RouterLink>
            <RouterLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}>{t('Contact Us')}</RouterLink>
            <RouterLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}>{t('Blog')}</RouterLink>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton sx={{ color: 'primary.main' }}><FavoriteBorderIcon /></IconButton>
            {token ? (
              <>
                <Badge badgeContent={cartCount} color="primary">
                  <IconButton component={RouterLink} to='/cart' sx={{ color: 'primary.main' }}><ShoppingCartOutlinedIcon /></IconButton>
                </Badge>
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
            <ListItem><Typography fontWeight={700} color="primary">{t('Store')}</Typography></ListItem>
            <Divider />
            <ListItemButton component={RouterLink} to='/'><ListItemText primary={t('Home')} /></ListItemButton>
            <ListItemButton component={RouterLink} to='/'><ListItemText primary={t('About')} /></ListItemButton>
            <ListItemButton component={RouterLink} to='/'><ListItemText primary={t('Contact Us')} /></ListItemButton>
            <ListItemButton component={RouterLink} to='/'><ListItemText primary={t('Blog')} /></ListItemButton>
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
import { Box, Typography, List, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

export default function Profile() {
    const {t} = useTranslation();
    return (
        <Box display={'flex'} gap={3} mb={5}>
            <Box sx={{ width: 250, flexShrink: 0 }}>
                <Typography variant='h6' textAlign={'center'} fontWeight={'bold'} my={2}>
                    {t('Profile')}
                </Typography>
                <Divider />
                <List>
                    <ListItemButton component={Link} to={'profileInfo'}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={t('Info')} />
                    </ListItemButton>
                    <ListItemButton component={Link} to={'orders'}>
                        <ListItemIcon><ShoppingBagIcon /></ListItemIcon>
                        <ListItemText primary={t('Orders')} />
                    </ListItemButton>
                    <ListItemButton component={Link} to={'mode'}>
                        <ListItemIcon><DarkModeIcon /></ListItemIcon>
                        <ListItemText primary={t('Mode')} />
                    </ListItemButton>
                    <ListItemButton component={Link} to={'language'}>
                        <ListItemIcon><LanguageIcon /></ListItemIcon>
                        <ListItemText primary={t('Language')} />
                    </ListItemButton>
                </List>
            </Box>
            <Divider orientation='vertical' flexItem />
            <Box flex={1}>
                <Outlet />
            </Box>
        </Box>
    )
}
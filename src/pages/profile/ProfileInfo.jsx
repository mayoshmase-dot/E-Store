import useProfile from '../../hooks/useProfile'
import { Box, Typography, Avatar, Divider, Paper } from '@mui/material';
import Loader from '../../ui/loader/Loader';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileInfo() {
    const { t } = useTranslation();
    const { data, isError, isLoading, error } = useProfile();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Box py={5}>
                <Box sx={{ bgcolor: 'primary.main', p: 5, display: 'flex', flexDirection: 'column',borderRadius:3, alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ width: 90, height: 90, bgcolor: 'white', color: 'primary.main', fontSize: 40 }}>
                        {data.fullName?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography variant='h5' color='white' fontWeight='bold'>
                        {data.fullName}
                    </Typography>
                </Box>

                <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box display='flex' alignItems='center' gap={2}>
                        <PersonIcon sx={{ color: 'primary.main' }} />
                        <Box>
                            <Typography variant='body2' color='text.secondary'>{t('FullName')}</Typography>
                            <Typography variant='body1' fontWeight='medium'>{data.fullName}</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display='flex' alignItems='center' gap={2}>
                        <EmailIcon sx={{ color: 'primary.main' }} />
                        <Box>
                            <Typography variant='body2' color='text.secondary'>{t('Email')}</Typography>
                            <Typography variant='body1' fontWeight='medium'>{data.email}</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display='flex' alignItems='center' gap={2}>
                        <PhoneIcon sx={{ color: 'primary.main' }} />
                        <Box>
                            <Typography variant='body2' color='text.secondary'>{t('Phone Number')}</Typography>
                            <Typography variant='body1' fontWeight='medium'>{data.phoneNumber}</Typography>
                        </Box>
                    </Box>
                </Box>
                </Box>
    )
}
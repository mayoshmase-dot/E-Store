import { Box, Typography, Switch, Stack } from "@mui/material";
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

import useThemeStore from "../../store/useThemeStore";
import { useTranslation } from "react-i18next";

export default function ProfileMode() {
    const { t } = useTranslation();
    const mode = useThemeStore((state) => state.mode)
    const toggleTheme = useThemeStore((state) => state.toggleTheme)

    return (
        <Box pt={5}>
            <Stack direction="row" alignItems="center" gap={2} onClick={toggleTheme}
                sx={{ cursor: 'pointer', p: 2, borderRadius: 2, border: '1px solid', borderColor: 'secondary.main', width: 'fit-content', '&:hover': { bgcolor: 'secondary.main' } }}>
                {mode === 'light' ? <LightMode sx={{ color: 'orange' }} /> : <DarkMode sx={{ color: 'primary.main' }} />}
                <Box>
                    <Typography fontWeight="medium">{mode === 'light' ? t('Light Mode') : t('Dark Mode')}</Typography>
                    <Typography variant="body2" color="text.secondary">{mode === 'light' ? t('Switch to dark mode') : t('Switch to light mode')}</Typography>
                </Box>
                <Switch checked={mode === 'dark'} onChange={toggleTheme} sx={{ ml: 2 }} />
            </Stack>
        </Box>
    )
}
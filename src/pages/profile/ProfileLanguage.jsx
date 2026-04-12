import { Box, Stack, Switch, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from "react-i18next";

export default function ProfileLanguage() {
    const { i18n } = useTranslation();
    const changeLanguage = () => {
        const newLng = i18n.language === "ar" ? "en" : "ar"
        i18n.changeLanguage(newLng);
    }

    return (
        <Box pt={5}>
            <Stack direction="row" alignItems="center" gap={2}
                onClick={changeLanguage}
                sx={{ cursor: 'pointer', p: 2, borderRadius: 2, border: '1px solid', borderColor: 'secondary.main', width: 'fit-content', '&:hover': { bgcolor: 'secondary.main' } }}>
                <LanguageIcon sx={{ color: 'primary.main' }} />
                <Box>
                    <Typography fontWeight="medium">{i18n.language === "ar" ? "العربية" : "English"}</Typography>
                    <Typography variant="caption" color="text.secondary">{i18n.language === "ar" ? "Switch to English" : "التبديل للعربية"}</Typography>
                </Box>
                <Switch checked={i18n.language === "ar"} onChange={changeLanguage} sx={{ ml: 2 }} />
            </Stack>
        </Box>
    )
}
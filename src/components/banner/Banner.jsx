import { Box, Button, CardMedia, Typography } from "@mui/material"
import banner from "../../assets/img/banner2.webp"
import { useTranslation } from "react-i18next"

export default function Banner() {
    const { t } = useTranslation();
    return (
        <Box mt={5}>
            <Box position="relative">
                <CardMedia component="img" image={banner} sx={{ width: "100%", objectFit: "cover", height: { xs: 200, sm: 300, md: "auto" } }} />

                <Box position="absolute" top={0} left={0} right={0} bottom={0}
                    sx={{
                        textAlign: "center", display: "flex", flexDirection: "column", justifyContent: 'center',
                        gap: { xs: 1, md: 2 }, alignItems: "center", px: { xs: 2, md: 0 }
                    }}>
                    <Typography variant="h3" color="white" sx={{ fontSize: { xs: 16, sm: 24, md: 48 } }}>
                        {t('Big Summer')} <Box component="span" fontWeight="bold">{t('Sale')}</Box>
                    </Typography>
                    <Typography variant="body2" color="#cfcfcf" sx={{ fontSize: { xs: 10, sm: 12, md: 14 } }}>
                        {t('Commodo fames vitae vitae leo mauris in. Eu consequat.')}
                    </Typography>
                    <Button sx={{ border: "1px solid white", color: "white", px: { xs: 2, md: 4 }, py: { xs: 0.5, md: 1 }, fontSize: { xs: 10, md: 14 } }}>
                        {t('Shop Now')}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
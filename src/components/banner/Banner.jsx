import { Box, Button, CardMedia, Typography } from "@mui/material"
import banner from "../../assets/img/Banner.webp"

export default function Banner() {
    return (
        <Box mt={5}>
            <Box position="relative">
                <CardMedia component="img" image={banner} sx={{ width: "100%", objectFit: "cover" }}/>

                <Box position="absolute" top={0} left={0} right={0} bottom={0}
                    sx={{textAlign: "center",display: "flex",flexDirection: "column", justifyContent:'center',
                        gap: 2,alignItems: "center" }}>
                    <Typography variant="h3" color="white">
                        Big Summer <Box component="span" fontWeight="bold">Sale</Box>
                    </Typography>
                    <Typography variant="body2" color="#cfcfcf">
                        Commodo fames vitae vitae leo mauris in. Eu consequat.
                    </Typography>
                    <Button sx={{ border: "1px solid white", color: "white", px: 4, py: 1 }}>
                        Shop Now
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

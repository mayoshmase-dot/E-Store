import { Box, Rating, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function ProductReviews({ reviews }) {
    const { t } = useTranslation()
    return (
        <Box my={6} bgcolor="secondary.main" p={2} borderRadius={4}>
            <Typography variant="h5" fontWeight="bold" mb={3}>
                {t("Reviews")}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {reviews?.length > 0 ? reviews.map((review) => (
                    <Box p={2} sx={{
                        backgroundColor: "white", borderRadius: 2,
                        flex: '1 1 500px',
                    }}>
                        <Typography variant="h6" fontWeight="bold" my={1}>
                            {review.userName}
                        </Typography>
                        <Rating value={review.rating} readOnly size="small" />
                        <Typography variant="body2" mt={1}>
                            {review.comment}
                        </Typography>
                    </Box>
                )) : (
                    <Typography color="text.secondary">No reviews yet</Typography>
                )}
            </Box>
        </Box>
    )
}
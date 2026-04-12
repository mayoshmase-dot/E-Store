import { Box, Button, Rating, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useAddReview from '../../hooks/useAddReview'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CreateReviews({ id }) {
    const { t } = useTranslation()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const { mutate: addReview, isPending: isReviewPending } = useAddReview(id )

    return (
        <Box my={6} p={4} sx={{ backgroundColor: 'secondary.main', borderRadius: 4 }}>
            <Typography variant='h4' fontWeight={'bold'} mb={2}>
                {t('Add Review')}
            </Typography>
            <Typography variant='h6' color={'secondary.dark'} mb={3}>
                {t('Share your experience with this product')}
            </Typography>
            <Box display={'flex'} flexDirection={'column'} gap={3}>
                <Box>
                    <Typography variant='h5' fontWeight={'bold'} mb={1}>
                        {t('Your Rating')}
                    </Typography>
                    <Rating size='large' value={rating} onChange={(e, newValue) => setRating(newValue)} />
                </Box>
                <TextField fullWidth multiline rows={3} label={t('Your Comment')}
                    value={comment} onChange={(e) => setComment(e.target.value)}
                    sx={{ backgroundColor: 'secondary.main', borderRadius: 2 }} />
                <Button variant='contained' disabled={isReviewPending} onClick={()=>addReview({Rating: rating, Comment: comment})}
                    sx={{ width: 'fit-content', px: 5, py: 1.5, borderRadius: 2 }}>
                      {t('Submit Review')}
                </Button>
            </Box>
        </Box>
    )
}
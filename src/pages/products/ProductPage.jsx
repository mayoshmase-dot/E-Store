import { useState } from "react";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import Loader from "../../ui/loader/Loader";
import { Box, Button, Container, Grid, Link, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";
import Products from "../../ui/products/Products";
import { Link as ReactLink } from "react-router-dom";

export default function ProductPage() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('')
    const [page, setPage] = useState("")
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [sortBy, setSortBy] = useState('Price')
    const [ascending, setAscending] = useState(false)
    const [appliedFilters, setAppliedFilters] = useState({ search: '', minPrice: '', maxPrice: '', sortBy: 'Price', ascending: false })

    const { data, isError, isLoading, error } = useProducts({ limit: 5, appliedFilters, page })
console.log(data)
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Container maxWidth={'lg'}>
            <Box py={5}>
                <Typography component={'h2'} variant='h5' mb={5} fontWeight={'bold'}>
                    {t('Products')}
                </Typography>
                <Grid container spacing={5}>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography fontWeight={'bold'} variant='h6'>{t('Filters')}</Typography>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Search Products')}</Typography>
                                <TextField fullWidth size='small' placeholder={t('Search Products...')}
                                    value={search} onChange={(e) => setSearch(e.target.value)}
                                />
                            </Box>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Price Range')}</Typography>
                                <Box display={'flex'} gap={1}>
                                    <TextField size='small' placeholder={t('Min Price')} value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)} type='number' />
                                    <TextField size='small' placeholder={t('Max Price')} value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)} type='number' />
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Sort By')}</Typography>
                                <Select fullWidth size='small' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <MenuItem value='Price'>{t('Price')}</MenuItem>
                                    <MenuItem value='Name'>{t('Name')}</MenuItem>
                                    <MenuItem value='Date'>{t('Date')}</MenuItem>
                                </Select>
                            </Box>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Order')}</Typography>
                                <Select fullWidth size='small' value={ascending} onChange={(e) => setAscending(e.target.value)}>
                                    <MenuItem value={false}>{t('Descending')}</MenuItem>
                                    <MenuItem value={true}>{t('Ascending')}</MenuItem>
                                </Select>
                            </Box>

                            <Button variant="contained" fullWidth onClick={() => { setAppliedFilters({ search, minPrice, maxPrice, sortBy, ascending }) }}>
                                {t('Apply Filters')}
                            </Button>

                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 9 }}>
                        <Grid container spacing={3}>
                            {data.response.data.map((product) =>
                                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                                    <Link component={ReactLink} to={`/product/${product.id}`} underline='none'>
                                        <Products product={product} />
                                    </Link>
                                </Grid>
                            )}
                        </Grid>

                        <Box display={'flex'} justifyContent={'center'} mt={4}>
                            <Pagination shape="rounded" count={page}
                                onChange={(e, value) => setPage(value)}
                                color="primary"
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}
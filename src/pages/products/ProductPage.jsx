export default function ProductPage() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [sortBy, setSortBy] = useState('Price')
    const [ascending, setAscending] = useState(false)

    const { data, isError, isLoading, error } = useProducts({ limit: 5, sortBy, price: minPrice, search, ascending })

    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Container maxWidth={'lg'}>
            <Box py={5}>
                <Typography component={'h2'} variant='h5' mb={3} fontWeight={'bold'}>
                    {t('Products')}
                </Typography>
                <Grid container spacing={3}>

                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box sx={{ p: 3, borderRadius: 3, backgroundColor: 'secondary.main', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography fontWeight={'bold'} variant='h6'>{t('Filters')}</Typography>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Search Products')}</Typography>
                                <TextField fullWidth size='small' placeholder={t('What are you looking for?')}
                                    value={search} onChange={(e) => setSearch(e.target.value)}
                                />
                            </Box>

                            <Box>
                                <Typography variant='body2' fontWeight={'bold'} mb={1}>{t('Price Range')}</Typography>
                                <Box display={'flex'} gap={1}>
                                    <TextField size='small' placeholder={t('Min')} value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)} type='number' />
                                    <TextField size='small' placeholder={t('Max')} value={maxPrice}
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
                                    <MenuItem value={true}>{t('Descending')}</MenuItem>
                                    <MenuItem value={false}>{t('Ascending')}</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Grid container spacing={3}>
                            {data.response.data.map((product) =>
                                <Grid item size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                                    <Link component={ReactLink} to={`/product/${product.id}`} underline='none'>
                                        <Products product={product} />
                                    </Link>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}

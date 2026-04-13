import { useState } from "react";
import { useTranslation } from "react-i18next";
import useProducts from "../../hooks/useProducts";
import Loader from "../../ui/loader/Loader";
import { Box, Button, Container, Grid, Link, MenuItem, Pagination, Select, TextField, Typography } from "@mui/material";
import Products from "../../ui/products/Products";
import { Link as ReactLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ProductPage() {
    const { t } = useTranslation();

    const [filter, setFilter] = useState({
        limit: 3,
        page: 1,
        sortBy: "price",
        minPrice: "",
        maxPrice: "",
        search: "",
        ascending: "false"
    });

    const { register, handleSubmit } = useForm({
        defaultValues: filter
    });

    const onSubmit = (data) => {
        setFilter((prev) => ({
            ...prev,
            ...data,
        }));
    };

    const handlePageChange = (e, value) => {
        setFilter((prev) => ({
            ...prev,
            page: value
        }));
    };

    const { data, isError, isLoading, error } = useProducts(filter);

    if (isLoading) return <Loader />;
    if (isError) return <Box color={"red"}>{error.message}</Box>;

    return (
        <Container maxWidth={"lg"}>
            <Box py={5}>
                <Typography component={"h2"} variant="h5" mb={5} fontWeight={"bold"}>
                    {t("Products")}
                </Typography>

                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ borderRadius: 3, display: "flex", flexDirection: "column", gap: 2.5 }}
                        >
                            <Typography fontWeight={"bold"} variant="h6">
                                {t("Filters")}
                            </Typography>

                            <Box>
                                <Typography variant="body2" fontWeight={"bold"} mb={1}>
                                    {t("Search Products")}
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder={t("Search Products...")}
                                    {...register("search")}
                                />
                            </Box>

                            <Box>
                                <Typography variant="body2" fontWeight={"bold"} mb={1}>
                                    {t("Price Range")}
                                </Typography>
                                <Box display={"flex"} gap={1}>
                                    <TextField
                                        size="small"
                                        type="number"
                                        placeholder={t("Min Price")}
                                        {...register("minPrice")}
                                    />
                                    <TextField
                                        size="small"
                                        type="number"
                                        placeholder={t("Max Price")}
                                        {...register("maxPrice")}
                                    />
                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="body2" fontWeight={"bold"} mb={1}>
                                    {t("Sort By")}
                                </Typography>
                                <Select fullWidth size="small" {...register("sortBy")} >
                                    <MenuItem value="price">{t("Price")}</MenuItem>
                                    <MenuItem value="name">{t("Name")}</MenuItem>
                                    <MenuItem value="date">{t("Date")}</MenuItem>
                                </Select>
                            </Box>

                            <Box>
                                <Typography variant="body2" fontWeight={"bold"} mb={1}>
                                    {t("Order")}
                                </Typography>
                                <Select fullWidth size="small" {...register("ascending")}>
                                    <MenuItem value="false">{t("Descending")}</MenuItem>
                                    <MenuItem value="true">{t("Ascending")}</MenuItem>
                                </Select>
                            </Box>

                            <Button type="submit" variant="contained" fullWidth>
                                {t("Apply")}
                            </Button>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 9 }}>
                        <Grid container spacing={3}>
                            {data.response.data.map((product) => (
                                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                                    <Link
                                        component={ReactLink}
                                        to={`/product/${product.id}`}
                                        underline="none"
                                    >
                                        <Products product={product} />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>

                        <Box display={"flex"} justifyContent={"center"} mt={4}>
                            <Pagination
                                shape="rounded"
                                count={filter.page}
                                page={filter.page}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

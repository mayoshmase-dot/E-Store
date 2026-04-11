import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useProfile from '../../hooks/useProfile';
import Loader from '../../ui/loader/Loader';

export default function ProfileOrders() {
    const { t } = useTranslation();
    const { data, isError, isLoading, error } = useProfile();
    console.log(data)
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box my={5}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {t('ID')}
                            </TableCell>
                            <TableCell>
                                {t('Amount Paid')}
                            </TableCell>
                            <TableCell>
                                {t('Order Date')}
                            </TableCell>
                            <TableCell>
                                {t('status')}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.orders?.map(order => (
                            <TableRow>
                                <TableCell >
                                    {order.id}
                                </TableCell>
                                <TableCell>
                                    {order.amountPaid}
                                </TableCell>
                                <TableCell>
                                    {order.orderDate}
                                </TableCell>
                                <TableCell>
                                    {order.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Box>
    )
}

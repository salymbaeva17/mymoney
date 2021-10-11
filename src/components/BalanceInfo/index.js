import {Box, Card, CardContent, Typography} from "@mui/material";
import React from 'react';
import "./style.css"
import Grid from '@mui/material/Grid';
import {useSelector} from "react-redux";

const BalanceInfo = () => {
    const {currentBalance, initialAmount, costs}= useSelector(store => store.tasks)
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: "info.main", color: "white"}}>
                        <CardContent>
                            <Typography variant="h5" component="div" >
                                {initialAmount}$
                            </Typography>
                            <Typography sx={{fontSize: "14"}} gutterBottom>
                                Поступило
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: "indianred", color: "white"}}>
                        <CardContent>
                            <Typography variant="h5" component="div" >
                                {costs}$
                            </Typography>
                            <Typography sx={{fontSize: "14"}} gutterBottom>
                                Расходы
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: "darkgreen", color: "white"}}>
                        <CardContent>
                            <Typography variant="h5" component="div" >
                                {currentBalance}$
                            </Typography>
                            <Typography sx={{fontSize: "14"}} gutterBottom>
                               Остаток
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default BalanceInfo;
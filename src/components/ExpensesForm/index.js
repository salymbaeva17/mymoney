import {DatePicker} from "@mui/lab";
import {Box, Button, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, {useState} from 'react';
import "./style.css"
import {useDispatch} from "react-redux"
import * as yup from "yup"
// import {addCost} from "../../redux/actions/taskActions";
// import {Formik} from "formik";

const ExpensesForm = () => {
    // const dispatch = useDispatch()
    // const validationSchema = yup.object().shape({
    //     data: yup.string().required("Choose date"),
    //     title: yup.string().required("Add title"),
    //     balance: yup.number().required("Choose date")
    // })
    const [date, setDate] = useState("")
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{marginY: "15px"}}
        >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <DatePicker
                        label="Дата"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        color="primary"

                        renderInput={(params) => <TextField sx={{width: "100%"}} variant="standard" {...params} />}
                    /></Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: "100%"}} id="title" label="Заголовок" variant="standard" color="primary"/>
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: "100%"}} id="summa" label="Сумма" variant="standard" color="primary"/>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "15px"}}>
                <Button variant="contained">Добавить</Button>
            </Box>
        </Box>
    );
};

export default ExpensesForm;

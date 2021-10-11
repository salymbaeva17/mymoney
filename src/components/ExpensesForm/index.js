import DatePicker from "@mui/lab/DatePicker";
import {Box, Button, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, {useState} from 'react';
import { useFormik} from "formik";
import {addTask} from "../../redux/actions/taskActions";
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import "./style.css"

const ExpensesForm = () => {
    const dispatch = useDispatch()
    // const validationSchema = yup.object().shape({
    //     data: yup.string().required("Choose date"),
    //     title: yup.string().required("Add title"),
    //     balance: yup.number().required("Choose date")
    // })
    const [date, setDate] = useState("")
    const formik = useFormik({
        initialValues: {
            title: '',
            amount: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            amount: Yup.string().required('Required'),
        }),
        onSubmit: (values )=> {
            values.date = date.getFullYear()
            dispatch(addTask(values))
        },
    });
    return (

        <form onSubmit={formik.handleSubmit} >
            <Grid container spacing={2}  sx={{marginTop: "20px"}}>
                <Grid item xs={4}>
                    <DatePicker
                        label="Дата"
                        value={date}
                        onChange={(value ) => setDate(value)}
                        name="date"
                        color="primary"
                        renderInput={(params) => <TextField sx={{width: "100%"}} variant="standard" {...params} />}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: "100%"}}
                               onChange={formik.handleChange}
                               name="title"
                               id="title"
                               label="Заголовок"
                               value={formik.values.title}
                               variant="standard"
                               color="primary"
                               error={formik.touched.title && Boolean(formik.errors.title)}
                               helperText={formik.touched.title && formik.errors.title}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: "100%"}}
                               onChange={formik.handleChange}
                               name="amount"
                               id="summa"
                               value={formik.values.amount}
                               label="Сумма"
                               variant="standard"
                               color="primary"
                               error={formik.touched.amount && Boolean(formik.errors.amount)}
                               helperText={formik.touched.amount && formik.errors.amount}
                    />
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "flex-end", width: "100%", marginTop: "15px", marginBottom: "30px"}}>
                <Button variant="contained" type="submit">Добавить</Button>
            </Box>
        </form>

    )
}

export default ExpensesForm;

import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteCost} from "../../redux/actions/taskActions";

const ExpensesList = () => {
    const {tasks} = useSelector(s => s.tasks)
    const dispatch = useDispatch()
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ bgcolor: "lightblue"}}>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <table className="table text-center py-4 table-responsive-md">
        //     <thead>
        //     <tr>
        //         <th scope="col">Date</th>
        //         <th scope="col">Cost's Name</th>
        //         <th scope="col">Cost's price</th>
        //         <th scope="col">Actions</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {tasks.map((item, idx) =>
        //         <tr>
        //             <td>{item.date}</td>
        //             <td>{item.title}</td>
        //             <td>{item.balance}</td>
        //             <td><button onClick={() => dispatch(deleteCost(idx))}
        //                         className='btn btn-sm btn-danger '>
        //                 <i className='bx bxs-trash-alt'/> Удалить
        //             </button></td>
        //         </tr>
        //     )}
        //
        //
        //     </tbody>
        // </table>
    );
};

export default ExpensesList;
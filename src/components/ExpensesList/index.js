import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCost} from "../../redux/actions/taskActions";

const ExpensesList = () => {
    const {tasks} = useSelector(s => s.tasks)
    const dispatch = useDispatch()
    return (
        <table className="table text-center py-4 table-responsive-md">
            <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Cost's Name</th>
                <th scope="col">Cost's price</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((item, idx) =>
                <tr>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>{item.balance}</td>
                    <td><button onClick={() => dispatch(deleteCost(idx))}
                                className='btn btn-sm btn-danger '>
                        <i className='bx bxs-trash-alt'/> Удалить
                    </button></td>
                </tr>
            )}


            </tbody>
        </table>
    );
};

export default ExpensesList;
const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: "asc"
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, action.payload],
                costs: state.costs + +action.payload.amount,
                currentBalance: state.currentBalance - +action.payload.amount
            }
        case "DELETE_TASK":
            const task = state.tasks[action.payload]
            return {...state,
                tasks: state.tasks.filter((el, idx) => idx !== action.payload),
                costs: state.costs - +task.balance,
                currentBalance: state.currentBalance + +task.balance
            }
        case "RESET_ALL":
            return initialState
        default:
            return state
    }
}
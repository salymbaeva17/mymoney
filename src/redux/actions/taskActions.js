export const addTask = (data) => {
    return {type:"ADD_TASK", payload: data}
}

export const deleteTask = (index) =>{
    return {type:"DELETE_TASK", payload: index}
}
export const resetAll = () =>{
    return {type:"RESET_ALL"}
}
export const addCost = (data) => {
    return {type:"ADD_TASK", payload: data}
}

export const deleteCost = (index) =>{
    return {type:"DELETE_TASK", payload: index}
}
export const resetAll = () =>{
    return {type:"RESET_ALL"}
}
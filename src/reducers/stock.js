export const storeReducer = (state, action) => {
    if (action.type === 'SELL') {
        const newState = { ...state };
        newState[action.item] -= 1;
        return newState
    }
    if (action.type === 'BUY') {
        const newState = { ...state };
        newState[action.item] += 1;
        return newState
    }
}
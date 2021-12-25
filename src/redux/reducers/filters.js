const initialState = {
    categorie: 0,
    sortBy: 'popular',

}

const filters = (state = initialState, action) => {
    action = {
        type: 'SET_SOTR_BY',
        payload: 'price'
    }
    if (action.type === 'SET_SOTR_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    return state;
}

export default filters;
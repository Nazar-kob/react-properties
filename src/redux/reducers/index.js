const ADD_AMOUNT = 'ADD_AMOUNT';
const DELETE_AMOUNT = 'DELETE_AMOUNT';
const CLEAR_AMOUNT = 'CLEAR_AMOUNT';

const addAmount = (amount) => (
    {
        type: ADD_AMOUNT,
        value: amount,
    });

const deleteAmount = (amount) => (
    {
        type: DELETE_AMOUNT,
        value: amount,
    });

const clearAmount = () => (
    {
        type: CLEAR_AMOUNT,
    });


const reduserAmount = (initialState = 0, action) => {
    switch (action.type) {
        case ADD_AMOUNT:
            return initialState + action.value
        case DELETE_AMOUNT:
            if (initialState < action.value) {
                return initialState
            }
            return initialState - action.value
        case CLEAR_AMOUNT:
            return 0;

        default:
            return initialState;
    }
}

export const actions = { addAmount, deleteAmount, clearAmount };

export default reduserAmount;

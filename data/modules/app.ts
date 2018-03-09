
// --------------------------
// Actions
// --------------------------

export const ADD_LOAD = 'app';

// --------------------------
// Actions Creator
// --------------------------

const updateHeader = () => ({
    type: ADD_LOAD
});


// --------------------------
// Reducers
// --------------------------

const initialState = {
    load: ''
};

interface InitialState {
    load: string
}

interface IAction {
    type: string
    payload: string
}

type Action = IAction;

export default (state: InitialState = initialState, action: Action ) => {
    switch (action.type) {
        case ADD_LOAD:
            return {
                ...state,
                load: action.payload
            };
        default:
            return state;
    }
};


// --------------------------
// Selectors
// --------------------------

export const mapStateToProps = (state: any) => {

    return {
        load: state.app.load
    };
};

export const mapStateToDispatch = {
};

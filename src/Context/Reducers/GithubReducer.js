const GithubReducers = (state, action)=>{
    switch(action.type) {
        case 'GET_USERS':
            return {
                // We use the spread operator in order to ovrride all the values of the object that share the same keys in the rest of the list
                ...state,
                users: action.payload,
                loading: false,
            }

            // We make a case just for lodaing so we can change the loading state of our APP
        case 'SET_LOADING':
            return{
                ...state,
                loading: true,
            }

        default:
            return state
    }
}

export default GithubReducers
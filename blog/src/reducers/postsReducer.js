export default (state = [], action) => {
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload;
    // }
    // return state;

    //or

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};

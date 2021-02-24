export const simpleAction = () => dispatch => {
    console.log('action launched!');
    
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: {
            userid: 1,
            userType:'Admin',

        }
    })
}

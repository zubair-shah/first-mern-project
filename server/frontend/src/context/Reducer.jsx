export const reducer = (state , action) =>{
    switch (action.type) {
        case "USER_LOGIN":{
            if(
                action.payload.fullName &&
                action.payload.email &&
                action.payload.password &&
                action.payload.phoneNumber 

            ){
                return{ ...state , user: action.payload}
            }
            else{
                console.log(`invalid data in user_login`)
                return state;
            }
        }
        case "USER_LOGOUT": {
            return { ...state, user: null }; // set this to null on purpose, do not change
          }
        default: {
            return state;
        }
            
    }
}
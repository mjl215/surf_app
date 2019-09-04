import isEmpty from '../validation/isEmpty';


const authReducerDefaultState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null
};

const authReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        token: localStorage.getItem('token'),
        isAuthenticated: !isEmpty(action.data),
        loading: false,
        user: action.data
      };

    // case 'CLEAR_USER': 
    //   return {
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: false
    //   }

    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.data.token)
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        loading: false
      };

    case 'REGISTER_FAIL':
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    
    case 'LOGOUT_USER':
    case 'CLEAR_USER':
      localStorage.removeItem('token')
      return{
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    
    default:
      return state
  }
}

export default authReducer
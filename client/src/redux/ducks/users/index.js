import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const INVITE_USERS = 'invite/INVITE_USERS'
const GOING_USERS = 'invite/GOING_USERS'
const NOTGOING_USERS = 'invite/NOTGOING_USERS'

// initial state
const initialState = {
  invite: {},
  going: [],
  notgoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INVITE_USERS:
      return { ...state, invite: action.payload }
    case GOING_USERS:
      return { ...state, going:action.payload}
    case NOTGOING_USERS:
      return { ...state, notgoing:action.payload}
    default:
      return state
  }
}

// action creators
const invitePeople = () =>{
  return dispatch => {
    axios.get('https://randomuser.me/api/').then(resp =>{
      const dets = {
        picture: resp.data.results[0].picture.medium,
        fname: resp.data.results[0].name.first,
        lname: resp.data.results[0].name.last,
        email: resp.data.results[0].email,
        phone: resp.data.results[0].phone
      }
      dispatch ({
        type: INVITE_USERS,
        payload: dets
      })
    })
  }
}
const Going = (user) =>{
  return dispatch =>{
    axios.post('/users/going/' , {user}).then(resp =>{
      dispatch(goPeople())
      dispatch(invitePeople())
    })
  }
}
const notGoing = (user) =>{
  return dispatch =>{
    axios.post('/users/notgoing/', {user}).then(resp =>{
      dispatch(notPeople())
      dispatch(invitePeople())
    })
  }
}
const goPeople = () =>{
  return dispatch =>{
    axios.get('/users/going').then(resp =>{
      dispatch({
        type:GOING_USERS,
        payload: resp.data
      })
    })
  }
}
const notPeople = () =>{
  return dispatch =>{
    axios.get('/users/notgoing').then(resp =>{
      dispatch({
        type:NOTGOING_USERS,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const dispatch = useDispatch()

  const invite = useSelector(appState => appState.userState.invite)
  const going = useSelector(appState => appState.userState.going)
  const naygoing = useSelector(appState => appState.userState.notgoing)

  const isgoing = item => dispatch(Going(item))
  const notgoing = item => dispatch(notGoing(item))
 
  useEffect(() => {
    dispatch(invitePeople())
  }, [dispatch])

  return { invite, isgoing, notgoing, going, naygoing }
}

// const goingPeope = ()
// const goingPeople = (item) =>{
//   return dispatch =>{
//       dispatch({
//         type: GOING_USERS,
//         payload: item
//     })
//   }
// }
// const notgoingPeople = (item) =>{
//   return dispatch =>{
//       dispatch({
//         type: NOTGOING_USERS,
//         payload: item
//     })
//   }
// }
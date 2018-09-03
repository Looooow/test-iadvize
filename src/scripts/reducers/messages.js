import actionType, {addMessages} from './actions'

const initialState = {
    // initiate users with photo
    users: [
      { id: 'user1', name: 'Lily Peters', photo: 'lily.jpg' },
      { id: 'user2', name: 'Molly Bailey', photo: 'molly.jpg' }
    ],
    // initiate some messages
    messages: [
      { userId: 'user1', id: 0, date: '2 sept. 2018', time: '15:32', message: 'Salut !' },
      { userId: 'user2', id: 1, date: null, time: null, message: 'Bonjour, \n tu vas bien ? ' },
      { userId: 'user1', id: 2, date: null, time: '15:34', message: 'Super, et toi ? ' },
      { userId: 'user2', id: 3, date: null, time: '15:36', message: 'Très bien oui' },
    ]
}

// Non utilisé, mais fonctionne également
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const getUsers = state => state.messages.users
export const getMessages = state => state.messages.messages
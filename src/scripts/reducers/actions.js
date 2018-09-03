export const addMessages = (messages) => ({ type : 'ADD_MESSAGES', payload : messages })

export default function ActionType(action) {
  return action().type;
};
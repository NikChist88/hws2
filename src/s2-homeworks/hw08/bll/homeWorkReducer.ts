import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      let sortedUsers = state
      if (action.payload === 'up') {
        sortedUsers = state.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
      } else if (action.payload === 'down') {
        sortedUsers = state.slice().sort((a, b) => (a.name < b.name ? 1 : -1))
      }
      return sortedUsers
    }
    case 'check': {
      const filteredAdultUsers = state.filter((u: UserType) => u.age >= 18)
      return filteredAdultUsers
    }
    default:
      return state
  }
}

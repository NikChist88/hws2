export type ThemeState = {
  themeId: number
}
export type ActionType = ReturnType<typeof changeThemeId>

const initState: ThemeState = {
  themeId: 1,
}

export const themeReducer = (
  state: ThemeState = initState,
  action: ActionType
): ThemeState => {
  // fix any
  switch (action.type) {
    // дописать
    case 'SET_THEME_ID':
      return { ...state, themeId: action.id }

    default:
      return state
  }
}

export const changeThemeId = (id: number) =>
  ({
    type: 'SET_THEME_ID' as const,
    id,
  }) // fix any

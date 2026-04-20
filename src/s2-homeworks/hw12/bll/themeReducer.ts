const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeTheme): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export type ThemeState = {
    themeId: number
}
type ChangeTheme = {type: 'SET_THEME_ID', id: number}
export const changeThemeId = (id: number): ChangeTheme => ({ type: 'SET_THEME_ID', id }) // fix any

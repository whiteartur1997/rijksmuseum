export type AppStateType = {
    cards: any[]
    pageSizes: number[]
    currentSize: number
    modalIsOpen: boolean
}

const initialState: AppStateType = {
    cards: [],
    pageSizes: [10, 25, 50],
    currentSize: 10,
    modalIsOpen: false
}


export const appReducer = (state: AppStateType = initialState, action: any): AppStateType => {
    switch(action.type) {
        default:
            return state;
    }
}

export const changeCurrentSize = (size: number) => {
    return {
        type: 'CHANGE-CURRENT-SIZE',
        size
    } as const;
}
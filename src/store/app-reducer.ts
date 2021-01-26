export type AppStateType = {
    cards: any[]
    pageSizes: number[]
    searchOptions: Array<OptionsType>
    currentOption: string
    currentSize: number
    modalIsOpen: boolean
}

export type ActionsType = ReturnType <typeof changeCurrentSize> |
    ReturnType <typeof changeCurrentOption>;

export type OptionsType =
    { type: "", description: "" } |
    { type: "relevance", description: "By relevance" } |
    { type: "chronologic", description: "By oldest" } |
    { type: "achronologic", description: "By newest"} |
    { type: "artist", description: "By artist"};

const initialState: AppStateType = {
    cards: [],
    pageSizes: [10, 25, 50],
    searchOptions: [
        { type: "relevance", description: "By relevance" },
        { type: "chronologic", description: "By oldest" },
        { type: "achronologic", description: "By newest"},
        { type: "artist", description: "By artist"}
    ],
    currentOption: "",
    currentSize: 10,
    modalIsOpen: false
}


export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch(action.type) {
        case 'CHANGE-CURRENT-SIZE': 
            return {
                ...state,
                currentSize: action.size
            }
        case 'CHANGE-CURRENT-OPTION':
            return {
                ...state,
                currentOption: action.option
            }    
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

export const changeCurrentOption = (option: string) => {
    return {
        type: 'CHANGE-CURRENT-OPTION',
        option
    } as const;
}
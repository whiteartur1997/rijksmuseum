import { Dispatch } from "redux";
import { apiRequests } from "../api/api";

export type AppStateType = {
    cards: any[]
    queryString: string
    pageSizes: number[]
    searchOptions: Array<OptionsType>
    currentOption: string
    currentSize: number
    modalIsOpen: boolean
    isInitializing: boolean
}

export type ActionsType =
    ReturnType<typeof changeCurrentSize> |
    ReturnType<typeof changeCurrentOption> |
    ReturnType<typeof changeInit>;

export type OptionsType =
    { type: "", description: "" } |
    { type: "relevance", description: "By relevance" } |
    { type: "chronologic", description: "By oldest" } |
    { type: "achronologic", description: "By newest" } |
    { type: "artist", description: "By artist" };

const initialState: AppStateType = {
    cards: [],
    queryString: "",
    pageSizes: [10, 25, 50],
    searchOptions: [
        { type: "relevance", description: "By relevance" },
        { type: "chronologic", description: "By oldest" },
        { type: "achronologic", description: "By newest" },
        { type: "artist", description: "By artist" }
    ],
    currentOption: "",
    currentSize: 10,
    modalIsOpen: false,
    isInitializing: true
}


export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'CHANGE-INIT': {
            return {
                ...state,
                isInitializing: action.value
            }
        }

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




// thunk creators
export const requestCards = (currentOption: string, queryString: string, currentSize: number) => {
    return (dispatch: Dispatch) => {
        apiRequests.getCards(currentOption, queryString, currentSize)
            .then(res => {
                dispatch(changeInit(false));
                dispatch.
            })
    }
}

// Action creators
export const changeInit = (value: boolean) => {
    return {
        type: 'CHANGE-INIT',
        value
    } as const;
}

export const setCards = (cards: ResponseType[]) => {
    return {
        type: 'SET-CARDS',
        cards:
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
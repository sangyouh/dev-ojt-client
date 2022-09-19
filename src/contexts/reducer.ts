export interface State {
    count: number;
}

export const initState = {
    count : 0,
} 

type Action = { type: "INCREMENT" } | { type: "DECREMENT" }

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}
import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
    // make piece of state based off of value in localstorage
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key)) || defaultVal
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
        //the state is initially set based off the returned value of this function
    });
    // use useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]); //we want this to run only when this state changes
    return [state, dispatch]
}
export default useLocalStorageReducer;

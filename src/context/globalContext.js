import React, { createContext, useEffect, useReducer } from "react"

const Context = createContext();

const ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code' 

function ContextProvider({ children }) {
    const [ state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_ALLJOBS" : {
                return {
                    ...state, allJobs: action.getAllJobs,
                }
                break;
            }

            case "SET_ISLOADED" : {
                return {
                    ...state, isLoaded: false
                }
                break;
            }
            default:
                return state
        }
    }, {
        allJobs: [],
        isLoaded: true,
    })

    const getJobs = async () => {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        dispatch({ type:"SET_ALLJOBS", getAllJobs: data })
    }

    useEffect(() => {
        setTimeout(() => dispatch({ type:"SET_ISLOADED"})  , 10000 )
    }, [])

    useEffect(() => {
        getJobs()
    }, [])

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
} 

export { Context, ContextProvider }

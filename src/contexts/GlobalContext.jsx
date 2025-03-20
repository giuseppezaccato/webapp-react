import { createContext, useContext } from 'react';
import { useState } from 'react';

const GlobalContext = createContext();


function GlobalProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false)

    const options = {
        isLoading,
        setIsLoading
    }

    return (
        <GlobalContext.Provider value={options} >
            {children}
        </GlobalContext.Provider>

    )
}

const useGlobalContext = () => useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}
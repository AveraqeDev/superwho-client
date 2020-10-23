import React, { useContext, useState } from 'react'

const SearchHeroContext = React.createContext()

export function SearchHeroProvider({ children }) {
    const [heros, setHeros] = useState([])
    const [searched, setSearched] = useState(false)

    const value = {
        heros,
        setHeros,
        searched,
        setSearched
    }

    return <SearchHeroContext.Provider value={value} children={children} />
}

export function useSearchHero() {
    return useContext(SearchHeroContext)
}

import React, { useContext, useState, useEffect, useRef } from 'react'
import * as storage from '../util/localStorage'

const FavoriteHeroContext = React.createContext()

export function FavoriteHeroProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        return storage.getFavorites()
    })

    const firstRenderRef = useRef(true);

    useEffect(() => {
        if(!firstRenderRef.current) {
            storage.updateFavorites(favorites)
        }
        firstRenderRef.current = false
    }, [favorites])

    const value = {
        isFavorite: heroId => favorites.find(hero => hero.id === heroId) ? true : false,
        addFavorite: hero => {
            setFavorites(favorites.concat(hero))
        },
        removeFavorite: heroId => {
            setFavorites(favorites.filter(hero => hero.id !== heroId))
        }
    }

    return <FavoriteHeroContext.Provider value={value} children={children} />
}

export function useFavoriteHero() {
    return useContext(FavoriteHeroContext)
}

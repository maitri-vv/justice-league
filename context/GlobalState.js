import React, { useState } from 'react'
import Context from './Context'

export default function GlobalState({ children }) {
    const [user, setuser] = useState({
        email: '',
        name: '',
        complain: ''
    });

    return (
        <Context.Provider value={{ user, setuser}}>
            {children}
        </Context.Provider>
    )
}

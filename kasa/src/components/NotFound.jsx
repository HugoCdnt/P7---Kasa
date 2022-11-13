import {React, useEffect } from 'react'
// import { React, } from "react"

const NotFound = () => {

    useEffect(() => {
        document.title = 'Not found'
    }, [])

    return (
        <div>
            <h1>Oups 🙈 Cette page n'existe pas</h1>
        </div>
    )
}
 
export default NotFound
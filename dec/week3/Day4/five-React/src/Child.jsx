import React, { useContext } from 'react'
import { nameContext, qlithContext, themeContext } from './App'

function Child() {
    let value = useContext(nameContext);
    let theme = useContext(themeContext);
    let qlith = useContext(qlithContext);
    return (
        <div>
            this is the child

            <br />
            value {value}

            <br />
            theme :{theme}
            <br />
            qlith :{qlith}
        </div>
    )
}

export default Child
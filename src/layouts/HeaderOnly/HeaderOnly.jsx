import React from 'react'
import Header from '../DefaultLayout/Header'

const HeaderOnly = ({children}) => {
  return (
    <div>
        <Header></Header>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default HeaderOnly
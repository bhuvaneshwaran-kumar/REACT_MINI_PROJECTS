import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {

    const user = useSelector(store => store.user)

    return (
        <Route
            {...rest}
            render={(props) => !user ? <Redirect to='/login' /> : <Component props={...props} />}
        />
    )
}

export default PrivateRoute

import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

// components
import LoadingSpinner from '../components/LoadingSpinner'

// styles
import '../pages/Table.css'

export const ProtectedRoute = ({ element, ...args }) => {
    const Component = withAuthenticationRequired( element, {
        onRedirecting: () => <LoadingSpinner />
    })
    return (
        <div className="Table Table-header">
        <Component {...args} />
        </div>
    )
}
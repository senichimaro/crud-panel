
// auth buttons
import LoginButton from './AuthLogin'
import LogoutButton from './AuthLogout'

export const AuthButton = ({ isAuthenticated }) => {

    return isAuthenticated ? <LogoutButton /> : <LoginButton />
}
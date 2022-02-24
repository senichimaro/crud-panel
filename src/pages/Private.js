import { useAuth0 } from '@auth0/auth0-react';
import { regexUserID } from '../services/services';

// components
import { PrivateDataLoader } from '../components/PrivateDataLoader';
import { Profile } from './Profile';

export const Private = () => {
    const { isAuthenticated, user } = useAuth0();
    const userID = regexUserID(user.sub)
    return (
        <PrivateDataLoader userID={userID}>
            <Profile/>
        </PrivateDataLoader>
    )
}
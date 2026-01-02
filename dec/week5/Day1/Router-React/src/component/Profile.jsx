import React from 'react'
import { useParams } from 'react-router'

function Profile() {
    let { userid } = useParams();
    return (
        <div>
            Profile
            <br />
            id :{userid}
        </div>
    )
}

export default Profile
import React from 'react'

type User = {
    _id: string,
    name: string,
}

type UserHeaderProps = {
    users: User[],
}

export default function UserHeader({ users }: UserHeaderProps) {
    return (
        <ul>
            
        </ul>
    )
}

import React from 'react'
import DemoListProps from './demoListProps'

export default function DemoList({ demos }: DemoListProps) {
    const demoItems = demos.map((d) => <li key={d._id}>{d.value}</li>)

    return (
        <ul>
            {demoItems}
        </ul>
    )
}

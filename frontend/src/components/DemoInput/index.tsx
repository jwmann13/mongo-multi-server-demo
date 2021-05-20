import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'
import DemoInputProps from './demoInputProps';

export default function DemoInput({ postInput } : DemoInputProps) {
    const [value, setValue] = useState("");

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        // e.preventDefault();
        setValue(e.target.value);
        console.log(value);
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        postInput({ value })
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="value" value={value} onChange={handleChange} />
        </form>
    )
}

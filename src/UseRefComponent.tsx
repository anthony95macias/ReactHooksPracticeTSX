import React from 'react'
import { useRef } from 'react';

function UseRefComponent() {
    const inputRef = useRef<HTMLInputElement | null >(null);
    return (
        <input ref={inputRef} />
    )
}

export default UseRefComponent

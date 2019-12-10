import React, { useState } from 'react'

export default function Window() {
    const [title, setTitle] = useState('unnamed window');
    return <div>{title}</div>;
}
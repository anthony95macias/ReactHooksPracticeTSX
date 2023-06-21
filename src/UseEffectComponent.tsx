import React from 'react';
import { useState, useEffect } from "react";

function UseEffectComponent() {
    const [value, setValue] = useState(1);

    useEffect(() => { 
        const timer = window.setInterval(() => {
            setValue((v) => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <div>
        current Value:  {value}
        </div>
    )
}

export default UseEffectComponent;
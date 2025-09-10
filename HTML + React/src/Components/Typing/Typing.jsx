import { useState } from "react"

export const Typing = () => {
    const [text, setText] = useState("");
    
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
        </div>
    )
}
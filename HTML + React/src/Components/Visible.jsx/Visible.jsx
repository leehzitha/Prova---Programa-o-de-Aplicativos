import { useState } from "react"

export const Visible = ({text}) => {
    const [isVisible, setVisible] = useState(true);

    return (
        <div>
            {isVisible &&
            <p>{text}</p>}
            <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
        </div>
    )
}
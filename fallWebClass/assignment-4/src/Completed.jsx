import { useState } from 'react'

export default function Completed(){
    const [completionState, setCompletionState] = useState(false)

    function reverse(){
        setCompletionState(!completionState);
    }

    if(completionState){
        return(<button onClick={reverse}>Completed</button>)
        
    }
    return(<button onClick={reverse}>Not Completed</button>)
}
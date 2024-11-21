import { useRef, useState } from 'react'

export default function StopWatch() {

    const [ elapsedTime, setElapsedTime ] = useState(0)

    const intervalIdRef = useRef(null)
    const isRunningRef = useRef(false)


    function start() {
        if (isRunningRef.current) return
        intervalIdRef.current = setInterval(() => {
            setElapsedTime(e => e + 1)
        }, 1)
        isRunningRef.current = true

        console.log(intervalIdRef.current)
    }

    function stop() {
        clearInterval(intervalIdRef.current)
        isRunningRef.current = false
        console.log(intervalIdRef.current)

    }

    function reset() {
        console.log('reset')
        clearInterval(intervalIdRef.current)
        setElapsedTime(0)
        isRunningRef.current = false
    }

    return (
        <div>
            <div>Timer: {elapsedTime}</div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
import { useEffect, useState } from 'react'


export default function EffectExamples({ searchText, setSearchText }) {
    const[ counter, setCounter ] = useState(0)
    const[ counter1, setCounter1 ] = useState(0)

    const[ text, setText ] = useState('')

    useEffect(() => {
        function setDebouncedText(){
            //setSearchText(text)
            console.log(text)
        }

        const timeoutId = setTimeout(setDebouncedText, 250)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [ text ])

    useEffect(() => {
        console.log('this is my main effect')

        return () => {
            console.log('this is my unmount effect')
        }
    }, [ counter ])

    return (
        <>
            <button onClick={() => {
                setCounter(c => c + 1)
            }}>Counter: {counter}</button>
            <button onClick={() => {
                setCounter1(c => c + 1)
            }}>Counter: {counter1}</button>
            <input type="text" value={text} onInput={e => setText(e.value)} />
        </>
    )
}
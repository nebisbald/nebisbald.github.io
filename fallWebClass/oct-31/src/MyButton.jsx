import { useState } from 'react';

export default function MyButton({isSpecial, text}) {
    const clAss = isSpecial ?
        'special' :
        'notSpecial'

    const [ count, setCount ] = useState(0);

    //below is long form of above
    // const stateArray = useState(0);
    // const countt = stateArray[0];
    // const setCountt = stateArray[1];
    

    function handleButtonClicked() {
        isSpecial ?
        console.log('special button was clicked!') :
        console.log('not special button was clicked....')

        // or...
        console.log(`${clAss} was clicked`)  
        
        setCount(count + 1);
    }

    return <button className={clAss} onClick={handleButtonClicked}>{text}, count: {count}</button>
}




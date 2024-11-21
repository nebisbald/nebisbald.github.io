import MyButton from './MyButton'
import MyList from './MyList'

function App() {
  let info = "Welcome to my hell hole!"
  return (
    //if you dont want div in your page you can use a fragment <>
    //you must use className instead of class
    <>
      <h1 className="poop">{info}</h1>
      <p>What will happen if you press my button?</p>
      <MyButton isSpecial={false} text="butt hole one"/>
      <MyButton isSpecial={true} text="press butt hole two"/>
      <MyList/>
    </>
  )
}

export default App

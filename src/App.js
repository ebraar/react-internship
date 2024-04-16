import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch()

  console.log("object", useSelector(state => state) )
  const {init} = useSelector(state => state.change)
  const getData = () => {
    dispatch({type:'CHANGE', payload: "deneme"})
  }

  return (
    <>
    {init}
    <button onClick={getData}>verileri al</button>
    </>
  );
}

export default App;

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import arr from '../data'


const Detail = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(arr)
    },[])

    console.log("data",data)

    const redirectFunc = () => {
        window.location = "/"
    }
    return (
        <div>
            <button onClick={redirectFunc}>Yönlendir</button>
            {data.filter(dt => dt.id == id).map((dat, i) => (
                <div key={i}>{dat.name}</div>
            ))}
        </div>
    );
    
}

export default Detail
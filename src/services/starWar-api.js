import { useEffect, useState } from "react"
// import StarshipCard from "../Components/StarshipCard"
const url = 'https://swapi.dev/api/starships/'



export default function StarWarAPI(){

    const [starship, setStarship] = useState("null")
    let StarShipNames =null
    const getStarshipsData = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            StarShipNames = data.results
            // console.log(StarShipResult);
            setStarship(data)
            // let name = data.results[0].name;
            // console.log(name); 
    }
    useEffect(() => {
        getStarshipsData()
    },[]);

    const loading = () => {
        return <h1> Loading... </h1>
    }
    const loaded = () => {
        return (
        <div>
            <p>sgggg</p><br/>
            {StarShipNames.forEach(element => {
            console.log(element.name);
            })}
           
        </div>
        )
    }
    return starship ? loaded() : loading()
}